import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    BreadcrumbComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule
    
  ]
})
export class SharedModule { }
