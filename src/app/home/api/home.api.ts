import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';

const API_URL = `https://dummyjson.com/`;

@Injectable({ providedIn: 'root' })
export class HomeApi {
  constructor(private httpClient: HttpClient) {}
  public getAllProducts(): Observable<Product> {
    return this.httpClient.get<Product>(API_URL + `products`);
  }
}
