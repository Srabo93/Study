<?php

namespace Armin\Php\BuilderWithDirector;

class CarManualBuilder implements Builder
{
    private $manual;

    public function reset(): void
    {
        $this->manual = new \stdClass();
    }
    public function setSeats(int $number): void
    {
        $this->manual->seats = $number;
    }
    public function setEngine(Engine $engine): void
    {
        $this->manual->engine = $engine;
    }
    public function setTripComputer(): void
    {
        $this->manual->trip = "Trip set";
    }
    public function setGPS(): void
    {
        $this->manual->gps = "GPS set";
    }
    public function getResult()
    {
        return $this->manual;
    }
}
