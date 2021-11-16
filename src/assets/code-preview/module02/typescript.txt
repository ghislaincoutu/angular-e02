import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Module02Service {

  constructor(private http30: HttpClient) { }

  // Lecture du contenu d'un fichier JSON se trouvant sur un server Web.
  getUsers() {
    return this.http30.get("https://172.17.0.1:2443/angular-e02t02/data01.json");
  }

}
