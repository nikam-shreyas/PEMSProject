import { Component, OnInit } from '@angular/core';
import { setTime } from 'ngx-bootstrap/chronos/utils/date-setters';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'PEMS Chart Example';
  type = 'LineChart';
  data = [
    ["Jan",  7.0, -0.2, -0.9, 3.9],
    ["Feb",  6.9, 0.8, 0.6, 4.2],
    ["Mar",  9.5,  5.7, 3.5, 5.7],
    ["Apr",  14.5, 11.3, 8.4, 8.5],
    ["May",  18.2, 17.0, 13.5, 11.9],
    ["Jun",  21.5, 22.0, 17.0, 15.2],
    ["Jul",  25.2, 24.8, 18.6, 17.0],
    ["Aug",  26.5, 24.1, 17.9, 16.6],
    ["Sep",  23.3, 20.1, 14.3, 14.2],
    ["Oct",  18.3, 14.1, 9.0, 10.3],
    ["Nov",  13.9,  8.6, 3.9, 6.6],
    ["Dec",  9.6,  2.5,  1.0, 4.8]
  ];
  columnNames = ["Month", "New Efficiency Pump 1", "Old Efficiency Pump 1","Suction Pressure Pump 1", "Water Level Pump 1"];
  options = {
    hAxis: {
      title: 'Month'
   },
   vAxis:{
      title: 'Value'
   },
  };
  width = 550;
  height = 400;

  title2 = 'PEMS Sample Pie Chart';
   type2 = 'PieChart';
   data2 = [
      ['Pump 1', 45.0],
      ['Pump 2', 26.8],
      ['Pump 3', 12.8],
      ['Pump 4', 8.5],
      ['Pump 5', 6.2],
      ['Others', 0.7] 
   ];
   columnNames2 = ['Water Supply', 'Percentage'];
   options2 = {    
      is3D:true
   };
   width2 = 550;
   height2 = 400;

   title3 = 'Pressure vs Efficiency';
   type3='ScatterChart';
   data3 = [
      [8,12],
      [4, 5.5],
      [11,14],
      [4,5],
      [3,3.5],
      [6.5,7]
   ];
   columnNames3 = ['Pressure', 'Efficiency'];
   options3 = {   
   };
   width3 = 550;
   height3 = 400;

   title4 = 'PEMS Treemap(Left Click: Zoom in, Right Click: Zoom out)';
   type4='TreeMap';
   data4 = [
      ["Global",null,0,0],

      ["Pump 1","Global",0,0],
      ["Pump 2","Global",0,0],
      ["Pump 3","Global",0,0],
      ["Pump 4","Global",0,0],
      ["Pump 5","Global",0,0],

      ["Water Supply","Pump 1",52,31],
      ["Pressure","Pump 1",24,12],
      ["Temperature","Pump 1",16,-23],

      ["Medium Pressure","Pump 2",42,-11],
      ["Low Pressure","Pump 2",31,-2],
      ["High Pressure","Pump 2",22,-13],

      ["Low Temperature","Pump 3",36,4],
      ["Mid Temperature","Pump 3",20,-12],
      ["High Temperature","Pump 3",40,63],

      ["Low Efficiency","Pump 5",21,0],
      ["Mid Efficiency","Pump 5",10,12],
      ["High Efficiency","Pump 5",8,10],
          
   ];
   columnNames4 = ["Location", "Parent","Market trade volume (size)","Market increase/decrease (color)"];
   options4 = { 
      minColor:"#ff7777",
      midColor:'#ffff77',
      maxColor:'#77ff77',
      headerHeight:15,
      showScale:true
   };
   width4 = 550;
   height4 = 400;
}
