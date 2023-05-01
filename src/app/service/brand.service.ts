import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';

const baseUrl = "http://localhost:8080/brands";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) {}

  saveBrand(brand : any){
    return this.http.post(baseUrl, brand);
  }

  getBrand(){
    return this.http.get<any>(baseUrl + "?_limit=10");
  }
}
