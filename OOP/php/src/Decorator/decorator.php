<?php

namespace Armin\Php\Decorator;

require 'vendor/autoload.php';


function clientCode(NotifierInterface $notifier, string $msg)
{
    echo $notifier->send($msg);
}


echo"Notify with all Channels\n";
echo"=================\n";

$notifyAll = new SMSDecorator(new SlackDecorator(new WhatsappDecorator(new Notifier('Super User'))));

clientCode($notifyAll, 'This will Notify all');

echo"Whatsapp,Base Notify\n";
echo"=================\n";

$notifyWhatsapp = new WhatsappDecorator(new Notifier('Whatsapp User'));
clientCode($notifyWhatsapp, 'This will notfiy');

echo"\n";
echo"Slack,SMS, Base Notify\n";
echo"=================\n";

$notifySMSandSlack = new SlackDecorator(new SMSDecorator(new Notifier('SMS and Slack')));
clientCode($notifySMSandSlack, 'This will notfiy');
