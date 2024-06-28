<?php

namespace App\Controller\API\Backoffice;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class PortfolioController extends AbstractController
{
    #[Route('/a/p/i/backoffice/portfolio', name: 'app_a_p_i_backoffice_portfolio')]
    public function index(): Response
    {
        return $this->render('api/backoffice/portfolio/index.html.twig', [
            'controller_name' => 'PortfolioController',
        ]);
    }
}
