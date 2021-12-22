import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { BaseProduct, Product } from '../table/table.model';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.scss']
})
export class EditProductsComponent implements OnInit {
  formGroup!: FormGroup;
  productId!: string;
  product!: Product;
  productCode!: string;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private productsService: ProductsService) {
    this.activatedRoute.params.pipe(take(1)).subscribe({
      next: (response) => {
        this.productId = response['param'];
        this.getProduct();
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  ngOnInit(): void {
    this.editForm();
  }


  editForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      value: ['', Validators.required],
      type: ['', Validators.required],
      code: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  editProduct() {
    const baseProduct: BaseProduct = {
      product: this.formGroup.value.name,
      value: Number(this.formGroup.value.value),
      type: this.formGroup.value.type,
      code: this.formGroup.value.code,
      quantity: this.formGroup.value.quantity,
    };

    this.productsService.editProduct(this.productId, baseProduct).subscribe({
      next: (_) => {
        this.router.navigateByUrl('/');
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getProduct() {
    this.productsService.getProduct(this.productId).subscribe({
      next: (response) => {
        this.formGroup.setValue({
          name: response.product,
          value: response.value,
          type: response.type,
          code: response.code,
          quantity: response.quantity,
        });
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
