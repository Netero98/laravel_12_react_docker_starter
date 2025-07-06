<?php

use Laravel\Dusk\Browser;
use \Illuminate\Foundation\Testing\DatabaseTruncation;

uses(DatabaseTruncation::class);

test('basic example', function () {
    $this->browse(function (Browser $browser) {
        $browser->visit('/')
                ->assertSee('Hello world!');
    });
});
