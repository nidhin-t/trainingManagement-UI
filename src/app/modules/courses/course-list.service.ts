import { Injectable } from '@angular/core';
import {Data} from "../courses-list"
@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  editCourseList = new Data;
  // constructor(private CourseList:CoursesList) {
  //   this.editCourseList = CourseList
  //  }
}
