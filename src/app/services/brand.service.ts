import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { BrandResponeseModel } from '../models/EntityResponseModel/brandResponseModel';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
   apiUrl ="https://localhost:44373/api/Brands/getall";
  constructor(private httpClient: HttpClient) { }
  getBrands():Observable<BrandResponeseModel>{
    return this.httpClient.get<BrandResponeseModel>(this.apiUrl);



  }
}
