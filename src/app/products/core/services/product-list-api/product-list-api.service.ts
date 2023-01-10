import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONSTANT } from '../../constant/product.constant';

@Injectable({
  providedIn: 'root'
})
export class ProductListApiService {
  baseUrl = CONSTANT.baseURL;
  constructor(private httpClient: HttpClient) { }

  getProductList(){
    return this.httpClient.get(`${this.baseUrl}products`);
  }
  getSingleProductDetails(id:number){
    return this.httpClient.get(`${this.baseUrl}products/${id}`);
  }
}
