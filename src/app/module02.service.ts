import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Module02Service {
  envTitle = environment.envTitle;
  envURL = environment.envURL;

  constructor(private http30: HttpClient) { }

  // Lecture du contenu d'un fichier JSON se trouvant sur un server Web.
  getUsers() {
    return this.http30.get(this.envURL + "/angular-e02t02/data01.json");
    console.log(this.envTitle);
  }

}
