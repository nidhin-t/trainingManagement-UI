import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {SidebarComponent} from './header/sidebar/sidebar.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent,SidebarComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    RouterModule
  ]
})
export class MainModule { }
