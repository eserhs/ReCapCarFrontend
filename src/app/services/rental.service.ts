import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/EntityResponseModel/rentalResponseModel';
@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl ="https://localhost:44373/api/Rentals/getall";
  constructor(private httpCilent:HttpClient) { }
  getRentals():Observable<RentalResponseModel>{
    return this.httpCilent.get<RentalResponseModel>(this.apiUrl);
    
  }
}
