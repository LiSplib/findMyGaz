<?php

$config =
    [
        // Namespace racine de l'application.
        'app.namespace' => 'App',

        /*
         * Table des routes de l'application.
         *
         * Pour chaque nom de route listé il y a un contrôleur et éventuellement une vue associés.
         * La route 'signIn' est utilisée quand aucune route n'est spécifiée dans l'URL.
         */
        'mvc.routes' =>
            [
                'home'          =>
                    [
                        'controller'    => 'Home',
                        'view'          => 'page/home.phtml'
                    ],
            ],
    ];
