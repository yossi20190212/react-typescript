<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::group(['middleware'=>'api'],function(){
//     Route::get('posts/api',[PostController::class,'index'])
// });

Route::group(['middleware'=>'api'],function() {
    Route::get('posts',[PostController::class,'index']);
    Route::post('posts/create',[PostController::class,'create']);
    Route::post('posts/edit',[PostController::class,'edit']);
    Route::post('posts/update',[PostController::class,'update']);
    Route::post('posts/destroy',[PostController::class,'destroy']);
});