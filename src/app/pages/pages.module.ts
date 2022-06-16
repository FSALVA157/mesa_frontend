import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TramitesListarComponent } from './tramites/listar/tramites-listar.component';



@NgModule({
  declarations: [
    PagesComponent,
    TramitesListarComponent
  ],
  exports: [
    TramitesListarComponent,
    PagesComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
