import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CoursesList, Data } from '../courses-list';
import { CourseListService } from './course-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesMeta: CoursesList;
  coursesList: Data[];
  constructor(private callHttp: HttpService, private CourseListService: CourseListService, private router: Router) {

  }


  ngOnInit() {
    this.callHttp.getCoursesData().subscribe(res => {
      if (res.isValid) {
        this.coursesMeta = res;
        this.coursesList = this.coursesMeta.data
      }
    })
  }

  callEditComponent(completeData: any) {
    this.CourseListService.editCourseList = completeData;
    this.router.navigate(['courses/edit']);
  }

  onCreate(){
    this.router.navigate(['courses/create']);

  }
}
