<?php

namespace Algolia\CustomAlgolia\Observer;

use Magento\Framework\Event\Observer;
use Magento\Framework\Event\ObserverInterface;

class UpdateProductData implements ObserverInterface
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
        $logger->info('Custom Algolia Logger: '.$string);
    }
}

