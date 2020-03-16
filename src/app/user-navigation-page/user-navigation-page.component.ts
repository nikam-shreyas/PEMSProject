import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-navigation-page',
  templateUrl: './user-navigation-page.component.html',
  styleUrls: ['./user-navigation-page.component.css']
})
export class UserNavigationPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "500px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
