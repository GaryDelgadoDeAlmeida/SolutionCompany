<?php

namespace App\Controller\API\Backoffice;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class ProfileController extends AbstractController
{
    #[Route('/a/p/i/backoffice/profile', name: 'app_a_p_i_backoffice_profile')]
    public function index(): Response
    {
        return $this->render('api/backoffice/profile/index.html.twig', [
            'controller_name' => 'ProfileController',
        ]);
    }
}
