import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component'
import { CourseEditComponent } from './courses/course-edit/course-edit.component';
import { CourseCreateComponent } from './course-create/course-create.component';

const routes: Routes = [
  { path: 'courses', component: CoursesComponent },
  { path: "courses/edit", component: CourseEditComponent },
  { path: "courses/create", component: CourseCreateComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
