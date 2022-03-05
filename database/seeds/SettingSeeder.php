<?php

use App\Setting;
use Illuminate\Database\Seeder;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $setting = array(
            array(
                'param' => 'allow_duplicates' ,
                'value' => 0,
            )
        );

        foreach ($setting as $value) {
            Setting::updateOrCreate($value);
        }
    }
}
