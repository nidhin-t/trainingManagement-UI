import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';
import { Data } from '../courses-list';


@Component({
  selector: 'app-course-create',
  templateUrl: './course-create.component.html',
  styleUrls: ['./course-create.component.css']
})

export class CourseCreateComponent implements OnInit {
  @ViewChild('f') courseSubmitValues: NgForm;
  coursesList: Data;
  flag = true;

  constructor(private callHttp: HttpService, private router: Router) {
    this.coursesList = new Data()
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.flag) {

      //this code could be avoided by assigning directly from template
      this.coursesList.name = this.courseSubmitValues.value.name
      this.coursesList.description = this.courseSubmitValues.value.description
      this.coursesList.duration = this.courseSubmitValues.value.duration
      this.coursesList.price = this.courseSubmitValues.value.price
      this.coursesList.active = this.courseSubmitValues.value.active
      this.coursesList.createdDate = this.courseSubmitValues.value.createdDate
  
      this.flag = !this.flag
      this.callHttp.setCourseData(this.coursesList).subscribe(res=>{
        console.log(res)
      })
    }
  }
}
