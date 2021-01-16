import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  parentForm: FormGroup
  title = 'angular-bankjp';

  constructor(private fb: FormBuilder) {
    this.parentForm = this.fb.group({
      selectedBank: ['', Validators.required],
      selectedBranch: ['', Validators.required],
    });
  }

}
