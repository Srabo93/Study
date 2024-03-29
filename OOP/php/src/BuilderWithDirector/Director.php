<?php

namespace Armin\Php\BuilderWithDirector;

class Director
{
    public function makeSUV(Builder $builder): void
    {
        echo "SUV made";
    }

    public function makeSportsCar(Builder $builder): void
    {
        $builder->reset();
        $builder->setSeats(2);
        $builder->setEngine(new SportEngine());
        $builder->setTripComputer();
        $builder->setGPS();
    }
}
