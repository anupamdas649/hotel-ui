import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  logInForm = this.formBuilder.group({
    Phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    Password: ['', [Validators.required]],
  });
  hide = true;
  saveForm() {
    if (this.logInForm.valid) {
      console.log('Profile form data :: ', this.logInForm.value);
    }
  }
}
