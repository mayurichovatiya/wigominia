<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');

});
Route::get('/product',function () {
    return view('product/product');

});
Route::get('/product/generic',function () {
    return view('product/genericMedicine');

});
Route::get('/product/device',function () {
    return view('product/medicalDevice');

});
Route::get('/product/equipment',function () {
    return view('product/medicalEquipment');

});
Route::get('/product/regulate',function () {
    return view('product/regulatedMedicine');

});
Route::get('/product/contact',function () {
    return view('product/contact');

});
Route::get('/home',function () {
    return view('home');

});