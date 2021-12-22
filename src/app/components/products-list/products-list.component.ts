import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../table/table.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  productsList: Product[] = [];
  dataSource: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe({
      next: (response) => {
        this.dataSource = this.productsList = response;
      },
      error: (error) => {
        console.log("Error", error);
      }
    });
  }

  applyFilter(filterValue: string) {
    if(filterValue !== '') {
      this.dataSource = this.productsList.filter((element) => {
        const searchValue = filterValue.toLowerCase();
        const hasCode = element.code.toString().includes(searchValue);
        const hasProduct = element.product.toLowerCase().includes(searchValue);
        const hasType = element.type.toLowerCase().includes(searchValue);

        return hasCode || hasProduct || hasType;
      });
    } else {
      this.dataSource = this.productsList;
    }
  }

}
