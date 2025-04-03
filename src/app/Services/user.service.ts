import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseMessage } from '../main/shared/model/common';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 baseUrl = environment.apiUrl;
  products: any[] = [];
  constructor(private http:HttpClient) { }

  getUsers(): Observable<any>{
    console.log("this.baseUrl + 'User/list'",this.baseUrl + 'User/list')
    return this.http.get<ResponseMessage>(this.baseUrl + 'User/list');
  }
  AddUser(user: any){
    return this.http.post<any[]>(this.baseUrl + 'User',user);
  }

  UpdateUser(pId: number,user: any){
    return this.http.put<any>(this.baseUrl + 'User'+pId,user);
  }

  getUserById(id: number){
    return this.http.get<any>(this.baseUrl + 'User/'+id);
  }

  deleteUser(id: number){
    return this.http.delete<any>(this.baseUrl + 'User/'+id);
  }

  //getCategories(){
  //  return this.http.get<any[]>(this.baseUrl + 'category');
  //}

}
