<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OfferCategory extends Model
{
    use HasFactory;

    protected $table = 'offer_categories';
    protected $guarded = ['id'];
    public $timestamps = false;
}
