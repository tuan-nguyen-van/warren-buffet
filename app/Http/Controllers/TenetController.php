<?php

namespace App\Http\Controllers;

use App\Models\Tenet;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TenetController extends Controller
{
    /** 
     * @return array<string,string>
     */
    public function tenetTypes()
    {
        return Tenet::$tenetTypes;
    }

    /**
     * @return array<string,array<Tenet>>
     */
    public function store(Request $request)
    {
        $currentTotal = DB::select('SELECT COUNT(*) as total FROM tenets WHERE type = ?', [$request->type])[0]->total;

        Tenet::create([...$request->all(), 'order' => $currentTotal + 1]);

        return $this->returnTenetsCollection();
    }

    /**
     * @return array<string,array<Tenet>>
     */
    public function index()
    {
        return $this->returnTenetsCollection();
    }

    /**
     * @return array<string,array<Tenet>>
     */
    public function update(Request $request, Tenet $tenet)
    {
        $tenet->update($request->all());

        return $this->returnTenetsCollection();
    }

    /**
     * @return array<string,array<Tenet>>
     */
    public function destroy(Tenet $tenet)
    {
        $tenet->delete();
        $needChangeOrderTenets = Tenet::where('order', '>', $tenet->order)
            ->where('type', $tenet->type)
            ->get();
        foreach ($needChangeOrderTenets as $tenet) {
            $tenet->update(['order' => $tenet->order - 1]);
        }

        return $this->returnTenetsCollection();
    }

    /**
     * @return array<string,array<Tenet>>
     */
    private function returnTenetsCollection()
    {
        /** @phpstan-ignore-next-line */
        return collect(
            Tenet::orderByRaw("FIELD(type, 'business_tenet', 'management_tenet', 'financial_tenet', 'market_tenet')")
                ->orderBy('order')->get()
        )
            ->groupBy('type')
            ->all();
    }

    /**
     * @return string
     */
    public function changeOrder(Request $request, Tenet $tenet)
    {
        $allTenetsThisType = Tenet::where('type', $tenet->type)->get();

        // If 1, 2, 3, 4 , 5, 6. We change one tenet from current 2 to 6
        if ($request->order > $tenet->order) {
            $low = $tenet->order;
            $high = $request->order;
            foreach ($allTenetsThisType as $currentTenet) {
                if ($currentTenet->order < $low) {
                    continue;
                }
                if ($currentTenet->order > $low && $currentTenet->order <= $high) {
                    $currentTenet->update(['order' => $currentTenet->order - 1]);
                } elseif ($currentTenet->id == $tenet->id) {
                    $currentTenet->update(['order' => $high]);
                }
            }
        }
        // If 1, 2, 3, 4 , 5, 6. We change one tenet from current 5 to 2
        else {
            $low = $request->order;
            $high = $tenet->order;
            foreach ($allTenetsThisType as $currentTenet) {
                if ($currentTenet->order < $low) {
                    continue;
                }
                if ($currentTenet->order >= $low && $currentTenet->order < $high) {
                    $currentTenet->update(['order' => $currentTenet->order + 1]);
                } elseif ($currentTenet->id == $tenet->id) {
                    $currentTenet->update(['order' => $low]);
                }
            }
        }

        return 'success';
    }
}
