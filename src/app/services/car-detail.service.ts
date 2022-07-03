import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/EntityResponseModel/carDetailResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl ="https://localhost:44373/api/Cars/getbydatailcar";
  constructor(private  httpClient : HttpClient) { }
  getCarDetail():Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl);
  }
}
