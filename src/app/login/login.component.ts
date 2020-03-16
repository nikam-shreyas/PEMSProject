import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminNavigationPageComponent } from '../admin-navigation-page/admin-navigation-page.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  selectedValue: string = 'Administrator';

  selectChangeHandler (event: any) {
    this.selectedValue = event.target.value;
  }
  Validate(){
    if(this.selectedValue=='Administrator'){
      this.router.navigate(['admin-home']);
    }
    else if(this.selectedValue=='Superuser'){
      this.router.navigate(['superuser-home']);
    }
    else{
      this.router.navigate(['user-home']);
    } 
  }
}
