import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Models/Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit  {
  
  Products  :any[] = [];
  Categories :any [] = [];
  constructor(private productService: ProductService) {

  }

  ngOnInit(): void{
    this.getProducts();
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
