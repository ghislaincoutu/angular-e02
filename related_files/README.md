# angular-e02 &mdash; Programmation de divers composants et services Angular (E02)
[README](../README.md)

## Démonstration
https://ghislaincoutu.ca/r002/angular-e02

## Commandes Angular à exécuter pour générer les composants de l'exercice
```sh
ng generate component menu
ng generate component footer
ng generate component t01
ng generate component t02
ng generate component t03
ng generate component t04
ng generate service module01
ng generate service module02
```

## Fichier .htaccess à inclure dans le sous-répertoire angular-e02t02
Pour que la communication avec le serveur Apache distant fonctionne, il faut activer le module Apache _headers_ sur le serveur Apache distant. Ensuite, sur le serveur Apache distant, il faut ajouter un fichier **.htaccess** dans le sous-répertoire angular-e02t02, et y inclure la directive suivante :
```sh
Header set Access-Control-Allow-Origin "*"
```
