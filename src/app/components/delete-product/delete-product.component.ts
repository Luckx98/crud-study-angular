import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../table/table.model';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {
  product?: Product;
  productId!: string;

  constructor(private router: Router, private productsService: ProductsService) {
    this.productId = localStorage.getItem('deleteProductId') ?? '';
  }

  ngOnInit(): void {
    this.getProduct();
  }

  deleteProduct() {
    this.productsService.deleteProduct(this.productId).subscribe({
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
        this.product = response;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
