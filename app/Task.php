<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['label', 'sort_order', 'completed_at'];

    public static function boot() {
	    parent::boot();
	    static::created(function($task) {
	        $task->update(['sort_order'=>$task->id]);
	    });
    }

    public function getCreatedAtAttribute($value){
        return date('jS, F Y.',strtotime($value));
    }
    public function getCompletedAtAttribute($value){
        return  $value ? date('jS, F Y H:i A.',strtotime($value)) : null;
    }
}
