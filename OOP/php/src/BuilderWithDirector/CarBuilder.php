<?php

namespace Armin\Php\BuilderWithDirector;

class CarBuilder implements Builder
{
    private $car;

    public function reset(): void
    {
        $this->car = new \stdClass();
    }
    public function setSeats(int $number): void
    {
        $this->car->seats = $number;
    }
    public function setEngine(Engine $engine): void
    {
        $this->car->engine = $engine;
    }
    public function setTripComputer(): void
    {
        $this->car->trip = "Trip set";
    }
    public function setGPS(): void
    {
        $this->car->gps = "GPS set";
    }
    public function getResult()
    {
        return $this->car;
    }
}
