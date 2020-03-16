import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminNavigationPageComponent } from './admin-navigation-page/admin-navigation-page.component';
import { SuperUserNavigationPageComponent } from './super-user-navigation-page/super-user-navigation-page.component';
import { UserNavigationPageComponent } from './user-navigation-page/user-navigation-page.component';
import { DashboardStationWiseComponent } from './dashboard-station-wise/dashboard-station-wise.component';
import { DashboardUserWiseComponent } from './dashboard-user-wise/dashboard-user-wise.component';
import { ChartComponent } from './chart/chart.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin-home', component: AdminNavigationPageComponent,
    children: [
      { path: 'station/:type', component: DashboardStationWiseComponent },
      { path: 'user/:type', component: DashboardUserWiseComponent },
      { path: 'chart', component:ChartComponent}
    ]
  },
  {
    path: 'superuser-home', component: SuperUserNavigationPageComponent,
    children: [
      { path: 'station/:type', component: DashboardStationWiseComponent },
      { path: 'user/:type', component: DashboardUserWiseComponent },
      { path: 'chart', component:ChartComponent}
    ]
  },
  {
    path: 'user-home', component: UserNavigationPageComponent,
    children: [
      { path: 'station/:type', component: DashboardStationWiseComponent },
      { path: 'user/:type', component: DashboardUserWiseComponent },
      { path: 'chart', component:ChartComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
