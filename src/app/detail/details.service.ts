import { HttpClient } from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'

@Injectable({
    providedIn: 'root',
})

export class DetailService {
    private baseUrl = "https://localhost:44392"
    constructor(private httpClient: HttpClient) {}

    getHotelDetails(id: any): Observable<any> {
        return this.httpClient.get<any>(this.baseUrl+'/Hotel/'+ parseInt(id))
    }
}
