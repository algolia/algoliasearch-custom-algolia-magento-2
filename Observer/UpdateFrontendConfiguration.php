<?php

namespace Algolia\CustomAlgolia\Observer;

use Magento\Framework\Event\Observer;
use Magento\Framework\Event\ObserverInterface;

class UpdateFrontendConfiguration implements ObserverInterface
{
    public function __construct()
    {
        // Observer initialization code...
        // You can use dependency injection to get any class this observer may need.
    }

    public function execute(Observer $observer)
    {
        // Observer execution code...
        // Here you can modify frontend configuration

        // Example:
        // $configuration = $observer->getData('configuration');
        // $configuration['foo'] = 'bar';
    }
}

