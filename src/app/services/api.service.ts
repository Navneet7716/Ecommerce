import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../shared/product';
import { PRODUCTS } from '../../assets/products';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url: string = '../assets/products.json';
  constructor(private http: HttpClient) {}

  getProduct(id: number): Product {
    return PRODUCTS.filter((product) => product.id === id)[0];
  }
  getProducts(): Product[] {
    return PRODUCTS;
  }
  // getProductById(id): Observable<Product[]> {
  //   return this.http.
  // }
}
