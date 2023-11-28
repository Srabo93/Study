<?php

namespace Armin\Php\AbstractFactory\interfaces;

interface TemplateRenderer
{
    /**
     * @param array<int,mixed> $arguments
     */
    public function render(string $templateString, array $arguments = []): string;
}
