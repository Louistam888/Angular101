import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: ` <input (keyup.enter)="onKeyUp()" /> `,
})

//service
export class CoursesComponent {
  onKeyUp() {
    console.log('Enter key pressed');
  }
}
//9 template variables