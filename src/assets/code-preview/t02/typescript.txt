import { Component, OnInit } from '@angular/core';
import { Module02Service } from '../module02.service';

@Component({
    selector: 'app-t02',
    templateUrl: './t02.component.html',
    styleUrls: ['./t02.component.scss'],
    standalone: false
})
export class T02Component implements OnInit {
  users: any;

  constructor(private module02: Module02Service) { }

  ngOnInit(): void {
    this.module02.getUsers().subscribe(response01 => {
      this.users = response01
    }
    );
  }

}
