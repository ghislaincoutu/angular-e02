import { Component, OnInit } from '@angular/core';
import { Module01Service } from '../module01.service';

@Component({
  selector: 'app-t01',
  templateUrl: './t01.component.html',
  styleUrls: ['./t01.component.scss']
})
export class T01Component implements OnInit {
  message01: any = "";

  constructor(private module01: Module01Service) { }

  ngOnInit(): void { }

  readMessage(choice: number) {
    this.message01 = this.module01.readContent(choice);
  }

}
