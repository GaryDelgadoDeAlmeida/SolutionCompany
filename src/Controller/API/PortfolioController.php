<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api', name: 'api_')]
class PortfolioController extends AbstractController
{
    #[Route('/portfolios', name: 'get_portfolios', methods: ["GET"])]
    public function get_portfolios(Request $request): JsonResponse
    {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
    
    #[Route('/portfolio/{portfolioID}', name: 'get_portfolio', methods: ["GET"])]
    public function get_portfolio(int $portfolioID): JsonResponse
    {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
}
