<?php

namespace App\Http\Controllers;

use App\Http\Resources\OfferResource;
use App\Models\Offer;
use App\Models\OfferCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class OfferController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:sanctum')->except(['index', 'show']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OfferResource::collection(Offer::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'string'],
            'description' => ['nullable', 'string'],
            'small_description' => ['nullable', 'string'],
            'price' => ['required', 'numeric'],
            'active' => ['nullable', 'boolean'],
            'special' => ['nullable', 'boolean'],
            'image' => ['nullable', 'image'],
            'offer_category_id' => ['required', 'integer']
        ]);
        if ($validator->fails()) {
            return $this->sendResponse(null, 400);
        }
        $validator = $validator->validate();
        // TODO Upload image
        unset($validator['image']);
        $model = new Offer($validator);
        return $model->save()
            ? new OfferResource($model)
            : $this->sendResponse(null, 502);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $model = Offer::find($id);
        return $model
            ? new OfferResource($model)
            : $this->sendResponse(null, 400);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $model = Offer::find($id);
        if (!$model) return $this->sendResponse(null, 400);

        $validator = Validator::make($request->all(), [
            'title' => ['nullable', 'string'],
            'small_description' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
            'price' => ['nullable', 'numeric'],
            'active' => ['nullable', 'boolean'],
            'special' => ['nullable', 'boolean'],
            'image' => ['nullable', 'image'],
            'offer_category_id' => ['nullable', 'integer'],
        ]);
        if ($validator->fails()) {
            return $this->sendResponse(null, 400);
        }
        $validator = $validator->validate();

        // TODO Upload image
        unset($validator['image']);

        return $model->update($validator)
            ? new OfferResource($model)
            : $this->sendResponse(null, 502);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Offer::find($id) && Offer::find($id)->delete()
            ? $this->sendResponse()
            : $this->sendResponse(null, 502);
    }

    /**
     * Category list
     * @return Illuminate\Http\JsonResponse
     */
    public function categoryList()
    {
        return $this->sendResponse(OfferCategory::all());
    }

    /**
     * Create category
     * @param Request request
     * @return Illuminate\Http\JsonResponse
     */
    public function categoryStore(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => ['required', 'string'],
            'description' => ['required', 'string'],
        ]);
        if ($validator->fails()) {
            return $this->sendResponse(null, 400);
        }
        $validator = $validator->validate();
        $model = new OfferCategory($validator);
        return $model->save() ? $this->sendResponse($model) : $this->sendResponse(null, 500);
    }

    /**
     * Category update
     * @param Request request
     * @return Illuminate\Http\JsonResponse
     */
    public function categoryUpdate(Request $request, int $id)
    {
        $model = OfferCategory::find($id);
        $validator = Validator::make($request->all(), [
            'title' => ['nullable', 'string'],
            'description' => ['nullable', 'string'],
        ]);
        if ($validator->fails() || !$model) {
            return $this->sendResponse(null, 400);
        }
        $validator = $validator->validate();
        return $model->update($validator)
            ? $this->sendResponse(OfferCategory::find($id))
            : $this->sendResponse(null, 500);
    }

    /**
     *
     * @param int $id
     * @return Illuminate\Http\JsonResponse
     */
    public function categoryDestroy(int $id)
    {
        $model = OfferCategory::find($id);
        return $model && $model->delete()
            ? $this->sendResponse()
            : $this->sendResponse(null, 500);
    }
}
