<?php

namespace Armin\Php\Decorator;

class WhatsappDecorator extends BaseNotifier
{
    public function send(string $msg): void
    {
        parent::send($msg);
        echo "Sending '$msg' via WhatsApp by 0176 123456 \n";
    }
}
