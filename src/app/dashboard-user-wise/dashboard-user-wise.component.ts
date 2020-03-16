import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare const userwiseDashboard: any;
@Component({
  selector: 'app-dashboard-user-wise',
  templateUrl: './dashboard-user-wise.component.html',
  styleUrls: ['./dashboard-user-wise.component.css']
})
export class DashboardUserWiseComponent implements OnInit {
  val: any;
  editable: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    userwiseDashboard();
    this.val = this.route.snapshot.params['type'];
    console.log(this.val);
    if (this.val === "admin") {
      this.editable = false;
    }
    else {
      this.editable = true;
    }
  }

}
