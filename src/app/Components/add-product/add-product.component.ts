import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../Services/product.service';
import { Product } from '../../Models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  constructor(private fb: FormBuilder,private productService: ProductService,private router: Router) {}

  ngOnInit() {
    this.getCategories();
  }
  getCategories(){
    this.productService.getCategories().subscribe({
      next: res => this.Categories = res,
      error: err => console.log(err)
    });
  }

  Categories :any [] = [];

  productForm = this.fb.group({
    name: ['', Validators.required],
    sku: '',
    category: [0, Validators.required],
    basePrice: [0, Validators.required],
    mrp: [0, Validators.required],
    description: '',
    currency: [0, Validators.required],
    manufacturedDate: [new Date(), Validators.required],
    expireDate: [new Date(), [Validators.required, this.futureDateValidator]],
  });

  futureDateValidator(control:any) {
    const selectedDate = new Date(control.value);
    const today = new Date();
    return selectedDate > today ? null : { futureDate: true };
  }

  generateSKU() {
    this.productForm.patchValue({
      sku: Math.random().toString(36).substring(2,8).toUpperCase()
    });
  }

  AddProduct() {
    
    const newProduct: Product =this.productForm.value;
    
    this.productService.AddProduct(newProduct).subscribe({
    });
    this.router.navigate(['/']);
  }

}
