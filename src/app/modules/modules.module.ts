import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { CourseEditComponent } from './courses/course-edit/course-edit.component';
import { FormsModule } from '@angular/forms';
import { CourseCreateComponent } from './course-create/course-create.component';

@NgModule({
  declarations: [CoursesComponent, CourseEditComponent, CourseCreateComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ModulesRoutingModule,
    FormsModule
  ]
})
export class ModulesModule { }
