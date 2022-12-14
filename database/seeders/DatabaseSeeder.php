<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Settings;
use App\Models\User;
use DefStudio\Telegraph\Models\TelegraphBot;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        /**
         * -----------------------------------------
         *	Users
         * -----------------------------------------
         */
        User::query()->insert([
            [
                'name' => 'Developer AdriCQ',
                'email' => 'adriancapote95@gmail.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
                'role' => 'developer',
                'created_at' => now()
            ], [
                'name' => 'Developer DCQ',
                'email' => 'dariancapoteq@gmail.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
                'role' => 'developer',
                'created_at' => now()
            ],
        ]);
        /**
         * -----------------------------------------
         *	Telegram BOT
         * -----------------------------------------
         */

        // $bot = TelegraphBot::create([
        //     'token' => env('TELEGRAM_BOT_TOKEN', '5771381846:AAGP6UgaqoaxPBE8p6S1lq8pYhYIgijjAkA'),
        //     'name' => 'JaguaBIT',
        // ]);
        // $bot->chats()->create([
        //     'chat_id' => env('TELEGRAM_ADMIN_CHAT_ID'),
        //     'name' => 'Admin Chat',
        // ]);
        // if (env('APP_ENV') === 'production') {
        //     // Unregister bot
        //     $bot->unregisterWebhook(true)->send();
        //     // register webhook
        //     $bot->registerWebhook()->send();
        // }

        Settings::query()->insert([
            'site_title' => 'Cafe Guamuhaya',
            'site_about' => json_encode([
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod perferendis assumenda, facere, beatae ex nulla a id necessitatibus dolorem expedita minus reprehenderit inventore iure in ea, non debitis aspernatur.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod perferendis assumenda, facere, beatae ex nulla a id necessitatibus dolorem expedita minus reprehenderit inventore iure in ea, non debitis aspernatur.'
            ]),

            'address' => 'Cafe Guamuhaya',
            'social' => json_encode([
                [
                    'key' => 'tel',
                    'link' => 'tel:53375180',
                    'label' => '53375180',
                    'icon' => 'ion-'
                ], [
                    'key' => 'email',
                    'link' => 'mailto:adriancapote95@gmail.com',
                    'label' => 'adriancapote95@gmail.com',
                    'icon' => 'ion-email'
                ]
            ])

        ]);
    }
}
