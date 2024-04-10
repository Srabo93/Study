<?php

namespace Armin\Php\Decorator;

class BaseNotifier implements NotifierInterface
{
    public function __construct(private NotifierInterface $wrapped)
    {
    }
    public function send(string $msg): void
    {
        $this->wrapped->send($msg);
    }
}
