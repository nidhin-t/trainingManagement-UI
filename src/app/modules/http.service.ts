import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CoursesList } from './courses-list';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  headers: any;

  configFile = {
    postUrl: "localhost:3000/training-course/create"
  }




  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getCoursesData() {
    console.log("get is working")
    let url = "http://localhost:3000/training-course/getall"
    return this.httpClient.get<CoursesList>(url,{headers:this.headers})
  }

}
