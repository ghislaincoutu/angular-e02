# angular-e02 &mdash; Programmation de divers composants et services Angular (E02)

## Commandes Angular pour générer les composants de l'exercice
- ng generate component menu
- ng generate component footer
- ng generate component t01
- ng generate component t02
- ng generate component t03
- ng generate component t04
- ng generate service module01
- ng generate service module02

## Fichier .htaccess à inclure dans le sous-répertoire angular-e02t02
Pour que la communication avec le serveur Apache distant fonctionne, il faut activer le module Apache "headers" sur le serveur Apache distant. Ensuite, sur le serveur Apache distant, il faut ajouter un fichier .htaccess dans le sous-répertoire angular-e02t02, et y inclure la directive suivante :

Header set Access-Control-Allow-Origin "*"
