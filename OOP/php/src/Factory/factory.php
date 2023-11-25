<?php

namespace Armin\Php\Factory;

use Armin\Php\Factory\FacebookPoster;
use Armin\Php\Factory\LinkedInPoster;
use Armin\Php\Factory\SocialNetworkPoster;

require 'vendor/autoload.php';

function clientCode(SocialNetworkPoster $creator)
{

    $creator->post("Hello World");
    $creator->post("This is the 2nd Post of this user");

}

echo "Testing Creator1:\n";
clientCode(new FacebookPoster("jon doe", "********"));
echo "\n\n";
echo "Testing Creator2\n";
clientCode(new LinkedInPoster("jane doe", "******"));
