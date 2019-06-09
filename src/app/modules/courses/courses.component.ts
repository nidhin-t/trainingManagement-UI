import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CoursesList } from '../courses-list';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesList: CoursesList

  constructor(private callHttp: HttpService) {

  }

  ngOnInit() {
    // this.callHttp.getCoursesData().subscribe(res => {

    //     this.coursesList = res;
    //     console.log(res)

    // })
    // this.coursesList = this.callHttp.getCoursesData()
    // console.log(this.callHttp.getCoursesData())
  }

}
