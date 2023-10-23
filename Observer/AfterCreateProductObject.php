<?php

namespace Algolia\CustomAlgolia\Observer;

use Magento\Framework\Event\Observer;
use Magento\Framework\Event\ObserverInterface;

class AfterCreateProductObject implements ObserverInterface
{
    public function __construct()
    {
        // Observer initialization code...
        // You can use dependency injection to get any class this observer may need.
    }

    public function execute(Observer $observer)
    {
        $productData = $observer->getData('productObject');
        $this->logger(json_encode($productData->getData()));
    }

    public function logger($string)
    {
        $writer = new \Zend_Log_Writer_Stream(BP . '/var/log/customAlgoliaDebugger.log');
        $logger = new \Zend_Log();
        $logger->addWriter($writer);
       // echo $string; exit();
        $logger->info('Custom Algolia Logger: '.$string);
    }
}

