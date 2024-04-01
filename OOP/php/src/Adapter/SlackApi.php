<?php

namespace Armin\Php\Adapter;

class SlackApi
{
    public function __construct(private string $login, private string $apiKey)
    {
    }

    public function login(): void
    {
        echo "Logged in to a slack account '{$this->login}'.\n";
    }

    public function sendMessage(string $chatId, string $message): void
    {
        echo "Posted following message into the '$chatId' chat: '$message'.\n";
    }
}
