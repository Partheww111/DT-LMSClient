import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/product.service';
import { UserListService } from './user-list.service';
import { gResponseMessage, IQuerySpecs, PagedList, ResponseMessage } from '../../../main/shared/model/common';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../../main/shared/config/api-endpoints.config';
import { httpOptions } from '../../../main/shared/config/httpOptions';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users: any[] = [];  // Store the list of users
  isLoading: boolean = false;  // To manage loading state
  errorMessage: string = '';   // To display error message, if any
Products  :any[] = [];
  Categories :any [] = [];
  private apiEndpoint: string | undefined;
  constructor(private productService: ProductService,private userService:UserListService,private _http: HttpClient) {
  }

  ngOnInit(): void{
    this.getProducts();
  }
  getUsers(): void {
    this.isLoading = true;  // Set loading state to true
    this.userService.UserList().subscribe({
      next: (response: ResponseMessage) => {
        if (response.ResCode === 200) {  // Assuming response has a `code` to check if success
          this.users = response.Data || [];  // Assign the users data from response
          console.log("The User with new Implementation",this.users);
        } else {
          this.errorMessage = 'Failed to fetch users.';
        }
        this.isLoading = false;  // Set loading state to false after API call
      },
      error: (err) => {
        this.isLoading = false;  // Set loading state to false in case of error
        this.errorMessage = 'An error occurred while fetching users.';  // Set error message
        console.error(err);
      }
    });
  }
  getProducts() {
    this.productService.getProducts().subscribe({
      next: res => {
        // Extract the 'data' field from the response
        console.log('Response:', res.data);
        this.Products = res.data || [];
        console.log("These are the products:", this.Products);
      },
      error: err => console.log(err)
    });
  }

  //getProducts(){
  //  this.productService.getProducts().subscribe({
  //    next: res =>{
  //      this.Products = res
  //      console.log("this are the Product",this.Products);
  //    } ,
  //    error: err => console.log(err)
  //  });
  //}

  getCategories(){
    this.productService.getCategories().subscribe({
      next: res => this.Categories = res,
      error: err => console.log(err)
    });
  }
  DeleteProduct(id: any){
    var IsConfirm = confirm("Are you sure want to delete this product?")
    if(IsConfirm){
       this.productService.deleteProduct(id).subscribe();
       this.getProducts();
    }
  }
}
