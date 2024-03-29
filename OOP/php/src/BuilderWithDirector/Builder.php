<?php

namespace Armin\Php\BuilderWithDirector;

interface Builder
{
    public function reset(): void;
    public function setSeats(int $number): void;
    public function setEngine(Engine $engine): void;
    public function setTripComputer(): void;
    public function setGPS(): void;

}
