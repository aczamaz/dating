<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('messages', function (Blueprint $table)
        {
            $table->id();
            $table->timestamps();
            $table->bigInteger('sender')->unsigned();
            $table->bigInteger('recipient')->unsigned();
            $table->string('message',1000);
        });

        Schema::table('messages', function (Blueprint $table)
            {
                $table->foreign('sender')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');

                $table->foreign('recipient')
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
        Schema::dropIfExists('messages');
    }
}
