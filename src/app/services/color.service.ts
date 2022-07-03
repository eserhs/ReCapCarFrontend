import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/EntityResponseModel/colorResponseModel';
@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl ="https://localhost:44373/api/Colors/getall";
  constructor(private httpClient :HttpClient) { }
  getColors():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
