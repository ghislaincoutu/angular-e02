import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-t03',
  templateUrl: './t03.component.html',
  styleUrls: ['./t03.component.scss']
})
export class T03Component implements OnInit {
  envTitle = environment.envTitle;
  envURL = environment.envURL;

  htmlTemplate40: any = '';
  htmlData40: any = '';
  htmlString40: any = '';
  webServer40: string = this.envURL;

  constructor(
    public http20: HttpClient,
    private sanitizer20: DomSanitizer
  ) { }

  public displayHTML(file89: string) {
    switch (file89) {
      case 'message01': this.htmlTemplate40 = this.webServer40 + '/angular-e02t03/include01.html'; break;
      case 'message02': this.htmlTemplate40 = this.webServer40 + '/angular-e02t03/include02.html'; break;
      case 'message03': this.htmlTemplate40 = this.webServer40 + '/angular-e02t03/include03.html'; break;
    }
    this.http20.get(this.htmlTemplate40, { responseType: 'text' }).subscribe(data16 => {
      this.htmlString40 = data16;
      this.htmlData40 = this.sanitizer20.bypassSecurityTrustHtml(this.htmlString40);
    })
  }

  ngOnInit(): void {
    console.log(this.envTitle)
  }

}
