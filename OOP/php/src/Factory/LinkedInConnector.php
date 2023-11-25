<?php

namespace Armin\Php\Factory;

use Armin\Php\Factory\SocialNetworkConnector;

class LinkedInConnector implements SocialNetworkConnector
{
    public function __construct(private string $login, private string $password)
    {
    }
    public function login(): void
    {
        echo "Send HTTP API request to log in user $this->login with " .
                "password $this->password\n";
    }
    public function createPost($content): void
    {
        echo "Send HTTP API requests to create a post in Facebook timeline.\n";
    }
    public function logout(): void
    {
        echo "Send HTTP API request to log out user $this->login\n";
    }
}
