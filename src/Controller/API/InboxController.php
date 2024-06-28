<?php

namespace App\Controller\API;

use App\Manager\InboxManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api', name: 'api_')]
class InboxController extends AbstractController
{
    private InboxManager $inboxManager;

    function __construct(InboxManager $inboxManager) {
        $this->inboxManager = $inboxManager;
    }

    #[Route('/inbox', name: 'post_inbox', methods: ["POST"])]
    public function post_inbox(Request $request): JsonResponse {
        $jsonContent = json_decode($request->getContent(), true);
        if(!$jsonContent) {
            return $this->json([
                "message" => "An error has been encountered with the sended body"
            ], Response::HTTP_PRECONDITION_FAILED);
        }

        try {
            $fields = $this->inboxManager->checkFields($jsonContent);
            if(!$fields) {
                throw new \Exception("An error has been encountered with the sended body", Response::HTTP_PRECONDITION_FAILED);
            }
            
            $inbox = $this->inboxManager->fillInbox($fields);
            if(is_string($inbox)) {
                throw new \Exception($inbox, Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        } catch(\Exception $e) {
            $code = Response::HTTP_INTERNAL_SERVER_ERROR;
            if($e->getCode() !== 200) {
                $code = $e->getCode();
            }

            return $this->json([
                "message" => $e->getMessage()
            ], $code);
        }

        return $this->json(null, Response::HTTP_CREATED);
    }
}
