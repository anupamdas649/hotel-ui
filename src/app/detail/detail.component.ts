import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ReserveFormComponent } from '../reserve-form/reserve-form.component';
import {DetailService} from './details.service'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  constructor(public dialog: MatDialog, private detailService: DetailService, private route: ActivatedRoute) {}

  readonly ROOT_URL = 'https://localhost:44392/Hotel';
  hotel: any = {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.detailService.getHotelDetails(id)
    .subscribe((successResponse) => {
      console.log('data fetched success')
      this.hotel = successResponse
      console.log(successResponse)
    }, (errorResponse) => {
      console.log(errorResponse)
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(ReserveFormComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
