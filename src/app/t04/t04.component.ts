import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-t04',
  templateUrl: './t04.component.html',
  styleUrls: ['./t04.component.scss']
})
export class T04Component implements OnInit {

  data81 = [
    { country: "Canada", city: "<p class='ca'>Montréal</p><p class='ca'>Test d'encodage des caractères spéciaux : À à Ç ç É é. <b>Lorem ipsum dolor</b> sit amet, consectetur adipiscing elit. Fusce tempus, nibh quis maximus vulputate, arcu nunc ornare magna, sit amet volutpat quam tellus at magna.</p>" },
    { country: "Canada", city: "<p class='ca'>Québec</p><p class='ca'>Test d'encodage des caractères spéciaux : À à Ç ç É é. <b>Sed ultrices arcu</b> sit amet ultricies aliquam. Donec malesuada augue quis magna convallis, sed elementum diam bibendum.</p>" },
    { country: "États-Unis", city: "<p class='us'>New-York</p><p class='us'>Test d'encodage des caractères spéciaux : À à Ç ç É é. <b>Nullam tempus</b> elementum molestie. Nulla lacus arcu, placerat eu leo a, interdum tincidunt dolor.</p>" },
  ]

  constructor(protected sanitizer23: DomSanitizer) { }

  public displayData(value: string) {
    return this.sanitizer23.bypassSecurityTrustHtml(value);
  }

  ngOnInit(): void {
  }

}
