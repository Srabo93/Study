<?php

namespace Armin\Php\Decorator;

class SMSDecorator extends BaseNotifier
{
    public function send(string $msg): void
    {
        parent::send($msg);
        echo "Sending '$msg' via SMS by 0176 123456
        \n";
    }
}
