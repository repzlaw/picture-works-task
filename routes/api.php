<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResources([
    '/tasks'=> 'TaskController',
]);

Route::put('/tasks/{task}/toggle-status',[App\Http\Controllers\TaskController::class,'toggleTaskCompletedStatus']);




Route::fallback(function(){
    return response()->json([
        'message' => 'Page Not Found. If error persists, contact ibitoyedavid@gmail.com'], 404);
});