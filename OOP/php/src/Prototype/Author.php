<?php

namespace Armin\Php\Prototype;

class Author
{
    /**
     * @param array<int,mixed> $
     * @param array<int,mixed> $pages
     */
    public function __construct(private string $name, private array $pages = [])
    {
    }
    public function addToPage(Page $page): void
    {
        $this->pages[] = $page;
    }
}
