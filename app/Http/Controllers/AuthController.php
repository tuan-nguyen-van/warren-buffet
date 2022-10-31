<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * @return \Illuminate\Http\JsonResponse|string
     */
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials, $request->remember)) {
            $request->session()->regenerate();

            return url()->previous();
        }

        return response()->json([
            'errors' => [
                'Credentials' => 'The provided credentials do not match our records.',
            ],
        ], 401);
    }

    /**
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    public function show()
    {
        return auth()->user();
    }

    /**
     * @return \Illuminate\Routing\Redirector|\Illuminate\Http\RedirectResponse
     */
    public function logout()
    {
        auth()->logout();

        return redirect('/login');
    }
}
