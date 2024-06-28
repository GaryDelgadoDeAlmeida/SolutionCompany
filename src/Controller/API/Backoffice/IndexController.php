<?php

namespace App\Controller\API\Backoffice;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/backoffice', name: 'api_backoffice_')]
class IndexController extends AbstractController
{
    #[Route('/', name: 'index', methods: ["GET"])]
    public function index(): JsonResponse
    {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
}
