<?php

namespace App\Controller\API\Backoffice;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/backoffice', name: 'api_backoffice_')]
class InboxController extends AbstractController
{
    #[Route('/inboxs', name: 'get_inboxs', methods: ["GET"])]
    public function get_inboxs(Request $request): JsonResponse
    {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
    
    #[Route('/inbox/{inboxID}', name: 'get_inbox', methods: ["GET"])]
    public function get_inbox(int $inboxID): JsonResponse
    {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
}
