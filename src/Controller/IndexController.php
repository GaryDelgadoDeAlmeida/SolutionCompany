<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class IndexController extends AbstractController
{
    #[Route('/{level0}/{level1}/{level2}', name: 'app_index', defaults: ["level0" => null, "level1" => null, "level2" => null], condition: "params['level0'] != 'api'")]
    public function index(): Response
    {
        return $this->render('index/index.html.twig');
    }
}
