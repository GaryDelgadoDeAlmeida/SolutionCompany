<?php

namespace App\Manager;

use App\Entity\Inbox;
use App\Repository\InboxRepository;
use App\Enum\InboxEnum;

class InboxManager {

    private InboxRepository $inboxRepository;

    function __construct(InboxRepository $inboxRepository) {
        $this->inboxRepository = $inboxRepository;
    }

    /**
     * @param array json content
     * @return array fields
     */
    public function checkFields(array $jsonContent) {
        $fields = [];
        $allowedFields = [];

        foreach($jsonContent as $fieldName => $fieldValue) {
            if(!in_array($fieldName, $allowedFields)) {
                continue;
            }

            if($fieldName == InboxEnum::INBOX_NAME) {
                // 
            } elseif($fieldName == InboxEnum::INBOX_EMAIL) {
                // 
            } elseif($fieldName == InboxEnum::INBOX_SUBJECT) {
                // 
            } elseif($fieldName == InboxEnum::INBOX_MESSAGE) {
                // 
            }

            $fields[$fieldName] = $fieldValue;
        }

        return $fields;
    }

    /**
     * @param array fields
     * @param Inbox inbox
     * @return Inbox
     */
    public function fillInbox(array $fields, ?Inbox $inbox = new Inbox()) {
        try {
            if(!$inbox->getId()) {
                $inbox
                    ->setRead(false)
                    ->setCreatedAt(new \DateTimeImmutable())
                ;
            }

            foreach($fields as $fieldName => $fieldValue) {
                if($fieldName == InboxEnum::INBOX_NAME) $inbox->setFullName($fieldValue);
                elseif($fieldName == InboxEnum::INBOX_EMAIL) $inbox->setEmail($fieldValue);
                elseif($fieldName == InboxEnum::INBOX_SUBJECT) $inbox->setSubject($fieldValue);
                elseif($fieldName == InboxEnum::INBOX_MESSAGE) $inbox->setMessage($fieldValue);
            }

            $this->inboxRepository->save($inbox, true);
        } catch(\Exception $e) {
            return $e->getMessage();
        }

        return $inbox;
    }
}