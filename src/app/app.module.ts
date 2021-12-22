import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { DefaultCardModule } from './shared/default-card/default-card.module';
import { ButtonModule } from './shared/button/button.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonCancelModule } from './shared/button-cancel/button-cancel.module';
import { MatCurrencyFormatModule } from 'mat-currency-format';
import { ButtonDeleteModule } from './shared/button-delete/button-delete.module';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';


import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { TableComponent } from './components/table/table.component';
import { SearchFieldComponent } from './components/searchfield/searchfield.component';
import { CreateProductsComponent } from './components/create-products/create-products.component';
import { EditProductsComponent } from './components/edit-products/edit-products.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    TableComponent,
    SearchFieldComponent,
    CreateProductsComponent,
    EditProductsComponent,
    DeleteProductComponent,
  ],
  imports: [
    AppRoutingModule,
    ButtonCancelModule,
    ButtonModule,
    ButtonCancelModule,
    ButtonDeleteModule,
    BrowserAnimationsModule,
    BrowserModule,
    DefaultCardModule,
    MatCurrencyFormatModule,
    MatIconModule, 
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
