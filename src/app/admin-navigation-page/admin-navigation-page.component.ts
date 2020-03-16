import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navigation-page',
  templateUrl: './admin-navigation-page.component.html',
  styleUrls: ['./admin-navigation-page.component.css']
})
export class AdminNavigationPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "500px";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  } 
  dataLoad(){
    this.router.navigate(['admin-home/data']);

  }
}
