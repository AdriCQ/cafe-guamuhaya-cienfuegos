<?php

use App\Models\OfferCategory;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offer_categories', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
        });

        Schema::create('offers', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('small_description')->nullable();
            $table->text('description')->nullable();
            $table->unsignedDecimal('price', 8, 2)->default(0);
            $table->boolean('active')->default(false);
            $table->boolean('special')->default(false);
            $table->timestamps();

            $table->foreignIdFor(OfferCategory::class);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offers');
        Schema::dropIfExists('offer_categories');
    }
};
