import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseProduct, Product } from '../../app/components/table/table.model';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private url = "https://crudcrud.com/api/18037ae11777407b9a1c3ab30ae630d1";

    constructor(private http: HttpClient) {  }

    getProducts() {
        const completeUrl = `${this.url}/products`;
        return this.http.get<Product[]>(completeUrl);
    }

    createProduct(product: BaseProduct) {
        const completeUrl = `${this.url}/products`;
        return this.http.post<Product>(completeUrl, product);
    }

    getProduct(id: string) {
        const completeUrl = `${this.url}/products/${id}`;
        return this.http.get<Product>(completeUrl);
    }

    deleteProduct(id: string) {
        const completeUrl = `${this.url}/products/${id}`;
        return this.http.delete<Product>(completeUrl);
    }

    editProduct(id: string, product: BaseProduct) {
        const completeUrl = `${this.url}/products/${id}`;
        return this.http.put<Product>(completeUrl, product);
    }
}
