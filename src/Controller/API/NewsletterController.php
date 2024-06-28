<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api', name: 'api_')]
class NewsletterController extends AbstractController
{
    #[Route('/newsletter', name: 'post_newsletter', methods: ["POST"])]
    public function post_newsletter(Request $request): JsonResponse
    {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
}
