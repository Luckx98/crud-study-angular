import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsListComponent,
  },
  {
    path: 'create-product',
    component: CreateProductsComponent,
  },
  {
    path: 'edit-product/:param',
    component: EditProductsComponent,
  },
  {
    path: 'delete-product',
    component: DeleteProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
