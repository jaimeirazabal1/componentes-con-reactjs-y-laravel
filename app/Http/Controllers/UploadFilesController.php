<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadFilesController extends Controller
{
    public function upload(Request $request){
        if(isset($request->subida)){
            
            foreach ($request->archivos as $key => $value) {
    
                $value->move(public_path().'/uploads/',$value->getClientOriginalName());
            }
        }
    }
}
