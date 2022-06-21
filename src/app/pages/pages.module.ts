import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TramitesModule } from './tramites/tramites.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent
  ],
  exports: [
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    TramitesModule,
    MatSidenavModule
  ]
})
export class PagesModule { }
