<?php

namespace Armin\Php\Decorator;

interface NotifierInterface
{
    public function send(string $msg): void;
}
