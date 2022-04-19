import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HotelService} from './hotels.service'

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css'],
})
export class HotelsComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient, private hotelService: HotelService) {}

  readonly ROOT_URL = 'https://localhost:44392/Hotel';
  posts: any;
  hotels: any

  ngOnInit(): void {
    // this.http.get(this.ROOT_URL).subscribe((data) => {
    //   this.posts = data;
    //   console.log(this.posts);
    // });
    this.hotelService.getStudent()
    .subscribe((successResponse) => {
      console.log('data fetched success')
      this.hotels = successResponse
      console.log(successResponse)
    }, (errorResponse) => {
      console.log(errorResponse)
    })
  }
  goToDetailPage(id: any): void {
    this.router.navigateByUrl('/hotels/'+id);
  }
}
