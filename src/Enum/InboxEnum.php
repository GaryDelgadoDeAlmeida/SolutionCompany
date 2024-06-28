<?php

namespace App\Enum;

abstract class InboxEnum {

    public const INBOX_NAME = "fullname";
    public const INBOX_EMAIL = "email";
    public const INBOX_SUBJECT = "subject";
    public const INBOX_MESSAGE = "message";

    protected array $typeName = [
        self::INBOX_NAME => "Full name",
        self::INBOX_EMAIL => "Email",
        self::INBOX_SUBJECT => "Subject",
        self::INBOX_MESSAGE => "Message"
    ];

    public static function getAvailableChoices() {
        return [
            self::INBOX_NAME,
            self::INBOX_EMAIL,
            self::INBOX_SUBJECT,
            self::INBOX_MESSAGE
        ];
    }

    public static function getChoices() {
        $choices = [];

        foreach(self::getAvailableChoices() as $choice) {
            $choices[self::$typeName[$choice]] = $choice;
        }

        return $choices;
    }
}