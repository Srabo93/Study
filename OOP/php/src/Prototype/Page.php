<?php

namespace Armin\Php\Prototype;

use DateTime;

class Page
{
    private DateTime $date;

    /**
     * @param array<int,mixed> $comments
     */
    public function __construct(private string $title, private string $body, private Author $author, private array $comments = [])
    {
    }

    public function addComment(string $comment): void
    {
        $this->comments[] = $comment;
    }

    public function __clone(): void
    {
        $this->title = "Copyof " . $this->title;
        $this->author->addToPage($this);
        $this->comments = [];
        $this->date = new \DateTime();
    }
}
