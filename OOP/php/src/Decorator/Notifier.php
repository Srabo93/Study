<?php

namespace Armin\Php\Decorator;

class Notifier implements NotifierInterface
{
    public function __construct(private string $username)
    {
    }

    public function send(string $msg): void
    {
        echo "Sending '$msg' via Email by {$this->username}\n";
    }


}
