<?php

namespace Armin\Php\Adapter;

interface Notification
{
    public function send(string $title, string $message): void;
}
