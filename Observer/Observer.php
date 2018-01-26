<?php

namespace Algolia\CustomAlgolia\Observer;

use Magento\Framework\Event\ObserverInterface;

class Observer implements ObserverInterface
{
    public function __construct()
    {
        // Observer initialization code...
        // You can use dependency injection to get any class this observer may need.
    }

    public function execute(\Magento\Framework\Event\Observer $observer)
    {
        // Observer execution code...

        var_dump('Hell Yeah!');
        exit();
    }
}

