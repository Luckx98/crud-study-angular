import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Product } from './table.model';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent {
  displayedColumns: string[] = ['position', 'product', 'value', 'type', 'code', 'quantity', 'options'];

  @Input() dataSource: Product[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private router: Router) { }

  goToDeletePage(id: string) {
    localStorage.setItem('deleteProductId', id);
    this.router.navigateByUrl('/delete-product');
  }
}