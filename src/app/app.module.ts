import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AdminNavigationPageComponent } from './admin-navigation-page/admin-navigation-page.component';
import { SuperUserNavigationPageComponent } from './super-user-navigation-page/super-user-navigation-page.component';
import { UserNavigationPageComponent } from './user-navigation-page/user-navigation-page.component';
import { DashboardStationWiseComponent } from './dashboard-station-wise/dashboard-station-wise.component';
import { DashboardUserWiseComponent } from './dashboard-user-wise/dashboard-user-wise.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { ChartComponent } from './chart/chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
@NgModule({
  declarations: [
    AppComponent,
    AdminNavigationPageComponent,
    SuperUserNavigationPageComponent,
    UserNavigationPageComponent,
    DashboardStationWiseComponent,
    DashboardUserWiseComponent,
    LoginComponent,
    ReportsComponent,
    ChartComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    MaterialModule,
    GoogleChartsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
