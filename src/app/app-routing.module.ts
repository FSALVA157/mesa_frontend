import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TramitesListarComponent } from './pages/tramites/listar/tramites-listar.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  
  {
    path:'',component: PagesComponent 
    
  },
  {path:'tramites', component: TramitesListarComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
