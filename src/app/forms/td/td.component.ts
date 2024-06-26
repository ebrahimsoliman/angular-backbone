import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.scss']
})
export class TdComponent {
  @ViewChild('f') form: NgForm;
  binding: string = 'default';
  genders: Array<string> = ['Male',
    'Female']

  constructor() {
  }

  fill() {
    this.form.setValue({
      userData: {
        first_name: 'Ebrahim',
        last_name: 'Ahmed'
      },
      gender: 'Male'
    })
  }

  patch() {
    this.form.form.patchValue({
      userData: {
        last_name: 'Soliman'
      }
    })
  }


  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('you submitted value:', form.value);
      form.reset();
    }
  }
}
