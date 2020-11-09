<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateViewedsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vieweds', function (Blueprint $table)
            {
                $table->id();
                $table->timestamps();
                $table->bigInteger('user_a')->unsigned();
                $table->bigInteger('user_b')->unsigned();
            }
        );

        Schema::table('vieweds', function (Blueprint $table)
            {
                $table->foreign('user_a')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');

                $table->foreign('user_b')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');
            }
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vieweds');
    }
}
