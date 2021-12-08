<?php

/*
 * Constantes globales utilisées pour l'architecture MVC du projet.
 *
 * Les constantes commençant par DIR_ servent aux chemins absolus sur le disque dur.
 * Les constantes commençant par URL_ servent aux URLs absolues depuis localhost.
 */
const DIR_ROOT      = __DIR__;                      // Chemin vers le dossier racine de l'application
const URL_ROOT      = '/findmygaz';                  // URL vers l'application ** DOIT COMMENCER PAR UN / **
const DIR_VIEWS     = DIR_ROOT . '/views';            // Chemin vers les vues de l'application
const DIR_PLUGINS   = DIR_ROOT . '/plugin';           // Chemin vers les plugins
const URL_SOURCE      = URL_ROOT . '/sources';          // URL vers les fichiers statiques de l'application

// Est-ce que la réécriture d'URL est activée ?
const CONFIG_URL_REWRITE = true;
