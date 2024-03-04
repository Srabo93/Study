<?php

namespace Armin\Php\Singleton;

class Singleton
{
    private static $instances = [];

    protected function __construct()
    {
    }

    public static function getInstance(): self
    {
        $subclass = static::class;
        if(!isset(self::$instances[$subclass])) {
            self::$instances[$subclass] = new static();
        }

        return self::$instances[$subclass];
    }
    // technically we can put further business logic into singletons
}
