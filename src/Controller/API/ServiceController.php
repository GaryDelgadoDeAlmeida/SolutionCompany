<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api', name: 'api_')]
class ServiceController extends AbstractController
{
    #[Route('/services', name: 'get_services', methods: ["GET"])]
    public function get_services(): JsonResponse
    {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
}
