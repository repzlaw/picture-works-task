<?php

use App\Task;
use Illuminate\Database\Seeder;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tasks = array(
            array(
                'label' => 'create task' ,
            ),
            array(
                'label' => 'edit task' ,
            ),
            array(
                'label' => 'update task' ,
            )
        );

        foreach ($tasks as $task) {
            Task::updateOrCreate($task);
        }
    }
}
