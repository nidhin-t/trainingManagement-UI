import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('800ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('800ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
showSideBar:boolean = false;
  constructor() {
    // this.callsidebarService.showSidebar = false
   }

  ngOnInit() {
  }

  sidebarClick() {
    this.showSideBar = !this.showSideBar;
  }


}
