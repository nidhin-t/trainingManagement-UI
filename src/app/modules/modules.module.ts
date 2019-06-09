import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
