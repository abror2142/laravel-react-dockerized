<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function index() 
    {
        return response()->json(['message' => 'This message comes from laravel backend! -- UPDATED']);
    }
}
