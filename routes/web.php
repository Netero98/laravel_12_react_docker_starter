<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function() { return Inertia::render('welcome');} )->name('welcome');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
