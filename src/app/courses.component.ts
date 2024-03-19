import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `,
})

//service
export class CoursesComponent {
  title = 'List of Courses';
  courses;
  //dependency injuection is injecting dependency of the class into the constructor

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
  //logic for calling a http service
}
