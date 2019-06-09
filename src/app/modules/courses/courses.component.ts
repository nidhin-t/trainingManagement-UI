import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CoursesList,Data } from '../courses-list';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  coursesMeta: CoursesList;
  coursesList: Data[];
  constructor(private callHttp: HttpService) {

  }


  ngOnInit() {
    this.callHttp.getCoursesData().subscribe(res => {
      if (res.isValid) {
        this.coursesMeta = res;
        this.coursesList = this.coursesMeta.data
        console.log(this.coursesMeta.data)
      }
    })
  }

  callEdit(id:any){
    console.log("ID captured:",id)
  }

}
