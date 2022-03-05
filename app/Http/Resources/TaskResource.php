<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'label'=>$this->label,
            'sort_order' =>$this->sort_order,
            'completed_at'=>$this->completed_at,
            'created_at' =>(string) $this->created_at 
        ];
    }
}
