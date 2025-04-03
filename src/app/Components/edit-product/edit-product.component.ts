import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product } from '../../Models/Product';
import { ProductModel } from '../../Models/ProductModel';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{

  constructor(private fb: FormBuilder,private productService: ProductService,private route:ActivatedRoute,private router: Router) {}
  productId!:any;
  product!:ProductModel;
  Categories :any [] = [];
  ngOnInit(): void {
    
    this.getCategories();

    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.productId = params.get('id');

      this.productService.getProductById(parseInt(this.productId)).subscribe({
        next: res =>{
          this.product = res
          console.log(this.product);
          this.productForm.setValue(this.product);
        } ,
        error: err => console.log(err)
      })
    })
  }

  getCategories(){
    this.productService.getCategories().subscribe({
      next: res => this.Categories = res,
      error: err => console.log(err)
    });
  }

  productForm = this.fb.group({
    productId:[this.productId],
    name: [''],
    sku: '',
    category: [0],
    basePrice: [0],
    mrp: [0],
    description: '',
    currency: [0],
    manufacturedDate: [new Date()],
    expireDate: [new Date()],
  });

  generateSKU() {
    this.productForm.patchValue({
      sku: Math.random().toString(36).substring(2,8).toUpperCase()
    });
  }

  UpdateProduct(){
    this.productService.UpdateProduct(this.productId,this.productForm.value).subscribe();
    this.router.navigate(['/']);
  }
}
