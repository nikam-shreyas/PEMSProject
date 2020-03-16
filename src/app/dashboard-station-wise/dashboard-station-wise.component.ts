import { Component, OnInit } from '@angular/core';
import { GaugeModule } from 'angular-gauge';
import { ActivatedRoute } from '@angular/router';
declare const stationwiseDashboard: any;
@Component({
  selector: 'app-dashboard-station-wise',
  templateUrl: './dashboard-station-wise.component.html',
  styleUrls: ['./dashboard-station-wise.component.css']
})
export class DashboardStationWiseComponent implements OnInit {
  val: any;
  editable: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    stationwiseDashboard();
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
