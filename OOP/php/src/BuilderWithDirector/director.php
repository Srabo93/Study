<?php

namespace Armin\Php\BuilderWithDirector;

require 'vendor/autoload.php';

function clientCode()
{
    $director = new Director();

    $carBuilder = new CarBuilder();
    $director->makeSportsCar($carBuilder);

    $car = $carBuilder->getResult();

    echo "Car built:\n";
    echo var_export($car, true);

    $manualBuilder = new CarManualBuilder();
    $director->makeSportsCar($manualBuilder);

    $manual = $manualBuilder->getResult();

    echo "Manual built:\n";
    echo var_export($manual, true);

}


echo "Here should be the car build including the manual:\n";

clientCode();

echo "\n";
