import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ProductModel } from '../Models/ProductModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.apiUrl;
  products: any[] = [];
  constructor(private http:HttpClient) { }

  getProducts(): Observable<any>{
    console.log("this.baseUrl + 'User/list'",this.baseUrl + 'User/list')
    return this.http.get<any[]>(this.baseUrl + 'User/list');
  }
  AddProduct(product: Product){
    
    return this.http.post<Product[]>(this.baseUrl + 'Product/Add',product);
  }

  UpdateProduct(pId: number,product: any){
    return this.http.put<Product>(this.baseUrl + 'Product/Edit/'+pId,product);
  }

  getProductById(id: number){
    return this.http.get<any>(this.baseUrl + 'Product/'+id);
  }

  deleteProduct(id: number){
    return this.http.delete<any>(this.baseUrl + 'Product/'+id);
  }

  getCategories(){
    return this.http.get<any[]>(this.baseUrl + 'category');
  }
}
