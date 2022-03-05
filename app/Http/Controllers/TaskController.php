<?php

namespace App\Http\Controllers;

use App\Task;
use App\Setting;
use Carbon\Carbon;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Http\Resources\TaskResource;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;

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
        $task = Task::create($request->validated());

        return $this->success( new TaskResource(($task)),
                                'task added successfully',
                                Response::HTTP_CREATED
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
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task->update($request->validated());

        return $this->success( new TaskResource(($task)),
                                'task updated successfully',
                                200
                            );
        
    }

    public function toggleTaskCompletedStatus(Task $task)
    {
        if($task->completed_at){
            $task->update([
                'completed_at'=> null
            ]);
        } else {
            $task->update([
                'completed_at'=> Carbon::now()->toDateTimeString()
            ]);
        }

        return $this->success( new TaskResource(($task)),
                                'task status updated successfully',
                                200
                            );

    }
}
