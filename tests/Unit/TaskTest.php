<?php

namespace Tests\Unit;

use App\Task;
use PHPUnit\Framework\TestCase;

class TaskTest extends TestCase
{
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_task_create()
    {
        $response = $this->post('/api/tasks', [
            'label' => 'Write Article',
        ]);
        $response->assertStatus(201);

    }
}
