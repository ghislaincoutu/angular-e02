import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-t03',
  templateUrl: './t03.component.html',
  styleUrls: ['./t03.component.scss']
})
export class T03Component implements OnInit {
  htmlTemplate40: any = '';
  htmlData40: any = '';
  htmlString40: any = '';
  webServer40: string = 'https://172.17.0.1:2443';

  constructor(
    public http20: HttpClient,
    private sanitizer20: DomSanitizer
  ) { }

  public displayHTML(file89: string) {
    switch (file89) {
      case 'message01': this.htmlTemplate40 = this.webServer40 + '/r002/angular-e02t03/include01.html'; break;
      case 'message02': this.htmlTemplate40 = this.webServer40 + '/r002/angular-e02t03/include02.html'; break;
      case 'message03': this.htmlTemplate40 = this.webServer40 + '/r002/angular-e02t03/include03.html'; break;
    }
    this.http20.get(this.htmlTemplate40, { responseType: 'text' }).subscribe(data16 => {
      this.htmlString40 = data16;
      this.htmlData40 = this.sanitizer20.bypassSecurityTrustHtml(this.htmlString40);
    })
  }

  ngOnInit(): void {
  }

}
