import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { BaseProduct } from '../table/table.model';


@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent implements OnInit {
  formGroup!: FormGroup;
  
  constructor(private router: Router, private formBuilder: FormBuilder, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      value: ['', Validators.required],
      code: ['', Validators.required],
      type: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  createProduct() {
    const baseProduct: BaseProduct = {
      product: this.formGroup.value.name,
      value: Number (this.formGroup.value.value),
      type: this.formGroup.value.type,
      code: this.formGroup.value.code,
      quantity: this.formGroup.value.quantity,
    };
    
    this.productsService.createProduct(baseProduct).subscribe({
      next: (_) => {
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.log(error);
      }
    });

  }

}
