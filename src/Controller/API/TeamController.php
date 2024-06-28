<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api', name: 'api_')]
class TeamController extends AbstractController
{
    #[Route('/teams', name: 'get_teams', methods: ["GET"])]
    public function get_teams(): JsonResponse
    {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
    
    #[Route('/team/{teamID}', name: 'get_team', methods: ["GET"])]
    public function get_team(int $teamID): JsonResponse
    {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
}
