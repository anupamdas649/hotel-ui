import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-reserve-form',
  templateUrl: './reserve-form.component.html',
  styleUrls: ['./reserve-form.component.css'],
})
export class ReserveFormComponent implements OnInit {
  constructor(public dialog: MatDialog, private formBuilder: FormBuilder) {}
  ngOnInit(): void {}
  bookingForm = this.formBuilder.group({
    FullName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    Phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    CheckInDate: ['', [Validators.required]],
    CheckOutDate: ['', [Validators.required]],
  });

  // checkInDate(control: any) {
  //   if (!control || !control.value) return null;
  //   if (!this.bookingForm.get('CheckOutDate')?.value) return null;
  //   const checkInDate = new Date(control.value);
  //   const checkOutDate = new Date(this.bookingForm.get('CheckOutDate')?.value);
  //   if (checkInDate > checkOutDate) {
  //     return { checkInDate: true };
  //   }
  //   return null;
  // }

  saveForm() {
    if (this.bookingForm.valid) {
      console.log('Profile form data :: ', this.bookingForm.value);
    }
  }
}
