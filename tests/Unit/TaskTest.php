<?php

namespace Tests\Unit;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
class TaskTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic unit test example.
     *
     * @return void
     */
    public function test_task_create()
    {
        $this->withoutExceptionHandling();
        $response = $this->post('/api/tasks', [
            'label' => 'Write Articles',
        ]);
        $response->assertStatus(201);

    }
}
