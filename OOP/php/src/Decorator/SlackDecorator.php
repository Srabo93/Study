<?php

namespace Armin\Php\Decorator;

class SlackDecorator extends BaseNotifier
{
    public function send(string $msg): void
    {
        parent::send($msg);
        echo "Sending '$msg' via Slack by Username: keyboardcat \n";
    }
}
