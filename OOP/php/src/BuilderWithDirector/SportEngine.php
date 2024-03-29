<?php

namespace Armin\Php\BuilderWithDirector;

class SportEngine implements Engine
{
    public function sound(): void
    {
        echo "Vroom Vroom!";
    }
}
