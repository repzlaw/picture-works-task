<?php
namespace App\Services;

use App\Task;


class TaskService
{
    //create notification
    public function create($label, $sort_order)
    {
        $task = Task::create([
            'label'=>$label,
            'model'=>$model,
            'url'=>$url,
            'reciever_id'=>$reciever_id,
            'causer_id'=>Auth::id(),
            'model_id'=>$model_id
        ]);

        return response()->json(['status'=>'ok','log'=> $log], 200);
    }

}
