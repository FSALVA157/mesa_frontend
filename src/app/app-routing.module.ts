import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { TramitesListarComponent } from './pages/tramites/listar/tramites-listar.component';
const routes: Routes = [
  {path:'dashboard', 
    component: PagesComponent,
    children: [
      {path:'', component: DashboardComponent},
      

      //licencias
      {path: 'tramites-listar',component: TramitesListarComponent},
      // {path: 'listar-licencias', component: LicenciasListarComponent},
      
    ]
  },
  {path:'', redirectTo: '/dashboard', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
