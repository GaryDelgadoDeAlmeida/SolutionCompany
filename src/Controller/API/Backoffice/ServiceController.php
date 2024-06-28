<?php

namespace App\Controller\API\Backoffice;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ServiceController extends AbstractController
{
    #[Route('/a/p/i/backoffice/service', name: 'app_a_p_i_backoffice_service')]
    public function index(): Response
    {
        return $this->render('api/backoffice/service/index.html.twig', [
            'controller_name' => 'ServiceController',
        ]);
    }
}
