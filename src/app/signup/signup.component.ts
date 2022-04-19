import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}
  signUpForm = this.formBuilder.group({
    FullName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    Phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    Password: ['', [Validators.required]],
  });
  hide = true;
  saveForm() {
    if (this.signUpForm.valid) {
      console.log('Profile form data :: ', this.signUpForm.value);
    }
  }
}
