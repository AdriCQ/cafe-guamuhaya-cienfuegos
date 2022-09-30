<?php

use App\Http\Controllers\EventsController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::prefix('users')->controller(UserController::class)->group(function () {
    Route::post('', 'authLogin');
});

Route::get('messages/all', [MessageController::class, 'list'])->middleware('auth:sanctum');

Route::apiResources([
    'events' => EventsController::class,
    'offers' => OfferController::class,
    'messages' => MessageController::class
]);

Route::prefix('offer-categories')->middleware('auth:sanctum')->group(function () {
    Route::get('', [OfferController::class, 'categoryList']);
    Route::post('', [OfferController::class, 'categoryStore']);
    Route::patch('{id}', [OfferController::class, 'categoryUpdate']);
    Route::delete('{id}', [OfferController::class, 'categoryDestroy']);
});


Route::get('messages/all', [MessageController::class, 'list'])->middleware('auth:sanctum');

Route::prefix('settings')->group(function () {
    Route::get('', [SettingsController::class, 'index']);
    Route::patch('', [SettingsController::class, 'update']);
});
