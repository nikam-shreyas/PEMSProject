import { Component, OnInit } from '@angular/core';
declare const valueget: any;
declare const getGWT: any;
declare const getDevices: any;

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    getDevices();
  }
  valuegetcall() {
    valueget();
  }
  getGWTcall() {
    getGWT();
  }

}
