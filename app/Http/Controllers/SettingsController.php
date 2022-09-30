<?php

namespace App\Http\Controllers;

use App\Http\Resources\SettingsResource;
use App\Models\Settings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SettingsController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['index']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new SettingsResource(Settings::first());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'site_title' => ['nullable', 'string'],
            'site_about' => ['nullable', 'array'],
            'site_about.*' => ['required', 'string'],
            'address' => ['nullable', 'string'],
            'social' => ['nullable', 'array'],
            'social.*.key' => ['required', 'string'],
            'social.*.label' => ['required', 'string'],
            'social.*.link' => ['required', 'string'],
            'social.*.icon' => ['required', 'string'],

        ]);
        if ($validator->fails()) {
            return $this->sendResponse(null, 400);
        }
        $validator = $validator->validate();
        $model = Settings::first();

        return $model->update($validator) ? new SettingsResource(Settings::first()) : $this->sendResponse(null, 500);
    }
}
