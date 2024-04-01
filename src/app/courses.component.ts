import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  template: `
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /> <br />

    {{ course.title | uppercase }} <br />
    {{ course.students | number }}<br />
    {{ course.rating | number : '1.2-2' }}<br />
    {{ course.price | currency : 'AUD' : true : '3.2-2' }}<br />
    {{ course.releaseDate | date : 'shortDate' }}<br />
    {{ text | summary : 10 }}
  `,
})

//service
export class CoursesComponent {
  course = {
    title: 'Angular COurse',
    rating: 2334,
    students: 43535,
    price: 2329.93,
    releaseDate: new Date(2016, 3, 1),
  };

  text = `This is asampel test summarisze tihs please adlkfjdlkajf  ljadflkjalkfjdkljfao;sdfj daljf;ldjfdae`;

  email = 'me@expample.com';

  onKeyUp() {
    console.log(this.email);
  }
}
//9 template variables
