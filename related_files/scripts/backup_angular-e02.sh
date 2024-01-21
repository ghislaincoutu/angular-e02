#!/bin/bash
function apply_pause() {
  read -p "$*"
}
echo "Copie de sécurité des fichiers relatifs à l'application angular-e02"
apply_pause "Appuyer sur la touche [Retour] pour continuer..."

source=/var/www/html/d002/angular-e02
destination=/home/Exercises/angular-e02/related_files/publication
rm $destination/*.tar.gz
tar -czvf $destination/pub_angular-e02_`(date +%Y%m%d-%H%M)`.tar.gz $source/

source=/var/www/html/d002/angular-e02t02/
destination=/home/Exercises/angular-e02/related_files/publication/pub_angular-e02t02_`(date +%Y%m%d-%H%M)`.tar.gz
tar -czvf $destination $source

source=/var/www/html/d002/angular-e02t03/
destination=/home/Exercises/angular-e02/related_files/publication/pub_angular-e02t03_`(date +%Y%m%d-%H%M)`.tar.gz
tar -czvf $destination $source

source=/home/Exercises/angular-e02/
destination=/home/Backups/angular-e02_`(date +%Y%m%d-%H%M)`.tar.gz
tar --exclude=".angular" --exclude=".git" --exclude="node_modules" -czvf $destination $source
