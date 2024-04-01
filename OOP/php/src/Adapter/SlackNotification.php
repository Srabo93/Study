<?php

namespace Armin\Php\Adapter;

class SlackNotification implements Notification
{
    public function __construct(private SlackApi $slack, private string $chatId)
    {
    }

    public function send(string $title, string $message): void
    {
        $slackMessage = "#" . $title . "#". strip_tags($message);
        $this->slack->login();
        $this->slack->sendMessage($this->chatId, $slackMessage);
    }
}
