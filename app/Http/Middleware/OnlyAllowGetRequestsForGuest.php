<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class OnlyAllowGetRequestsForGuest
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse) $next
     *
     * @return \Illuminate\Http\JsonResponse|\Illuminate\Http\RedirectResponse|\Illuminate\Http\Response
     */
    public function handle(Request $request, Closure $next)
    {
        /** @phpstan-ignore-next-line */
        if (auth()->user()->role === 'Guest' && $request->method() !== 'GET') {
            return response()->json([
                'not_allowed' => 'Guest is not allowed to perform this action!',
            ], 401);
        }

        return $next($request);
    }
}
