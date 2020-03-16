import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-user-navigation-page',
  templateUrl: './super-user-navigation-page.component.html',
  styleUrls: ['./super-user-navigation-page.component.css']
})
export class SuperUserNavigationPageComponent implements OnInit {

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
