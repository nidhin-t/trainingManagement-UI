import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CourseListService } from '../course-list.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  @ViewChild('f') courseSubmitValues: NgForm;
  editcoureList;
  flag = true;


  constructor(private CourseList: CourseListService) {
    this.editcoureList = CourseList.editCourseList
  }

  ngOnInit() {
    console.log(">>>value passed from child component:", this.editcoureList._id)
  }

  onSubmit() {
    if (this.flag) {
      console.log("temp value:", this.courseSubmitValues.value.name)
      
      this.flag=!this.flag
    }
  }

}
