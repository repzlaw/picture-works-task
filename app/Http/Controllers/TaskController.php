<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Task;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\TaskResource;
use App\Setting;

class TaskController extends Controller
{
    use ApiResponse;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks = Task::all();

        return $this->success( TaskResource::collection(($tasks)),
                                'get all task request success',
                                Response::HTTP_OK
                            );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTaskRequest $request)
    {
        $setting = Setting::where('param','allow_duplicates')->first();
        if ($setting){
            $allow_duplicate = $setting->value;
        } else {
            $allow_duplicate = 0;
        }

        if( !$allow_duplicate){
            $request->validate([
                'label'=> 'unique:tasks'
            ]);
        }

        $task = Task::create([
            'label'=>$request->label,
            'sort_order'=>$request->sort_order,
        ]);

        return $this->success( new TaskResource(($task)),
                                'task added successfully',
                                Response::HTTP_OK
                            );

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        return $this->success( new TaskResource(($task)),
                                'get single task success',
                                Response::HTTP_OK
                            );
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
