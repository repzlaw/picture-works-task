<?php

namespace App\Http\Requests;

use App\Setting;
use Illuminate\Foundation\Http\FormRequest;

class StoreTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $setting = Setting::where('param','allow_duplicates')->first();
        if ($setting){
            $allow_duplicate = $setting->value;
        } else {
            $allow_duplicate = 0;
        }

        if( !$allow_duplicate){
            return [
                'label'=> 'required|unique:tasks',
            ];
        }
        
        return [
            'label'=>'required',
        ];
    }
}
