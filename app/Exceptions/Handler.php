<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Exception  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Exception
     */
    public function render($request, Exception $exception)
    {
        
        if ($exception instanceof ModelNotFoundException) {
            return response()->json([
                'error' => 'Entry for '.str_replace('App\\', '', $exception->getModel()).' not found',
                'code' =>404 ], 404);
        }
        if ((Request::isMethod('post') && $exception instanceof MethodNotAllowedHttpException) || (Request::isMethod('post') && $exception instanceof NotFoundHttpException)) {
            return response()->json([
                'message' => 'Route Not Found',
                'status' => false,
                'code' =>404 
                ], 404
            );
        }
        if($exception instanceof  ModelNotFoundException || $exception instanceof NotFoundHttpException){
            return response()->json(['message'=>'Resource not found'],Response::HTTP_NOT_FOUND);
        }
        
        return parent::render($request, $exception);
    }
}
