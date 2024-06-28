<?php

namespace App\Controller\API\Backoffice;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class NewsletterController extends AbstractController
{
    #[Route('/a/p/i/backoffice/newsletter', name: 'app_a_p_i_backoffice_newsletter')]
    public function index(): Response
    {
        return $this->render('api/backoffice/newsletter/index.html.twig', [
            'controller_name' => 'NewsletterController',
        ]);
    }
}
