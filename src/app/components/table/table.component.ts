import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements AfterViewInit {

  dataSource = new MatTableDataSource<ListProducts>(ELEMENT_DATA);

  displayedColumns: string[] = ['position', 'product', 'value', 'type', 'code', 'quantity'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface ListProducts {
  position: number;
  product: string;
  value: number;
  type: string;
  code: number;
  quantity: number;
}

const ELEMENT_DATA: ListProducts[] = [
  { position: 1, product: "PS5", value: 3789.90, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 2, product: "PS5", value: 3789.90, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 3, product: "PS5", value: 3789.90, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 4, product: "PS5", value: 3789.90, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 5, product: "PS5", value: 3789.90, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 6, product: "PS5", value: 3789.90, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 7, product: "PS5", value: 3789.99, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 8, product: "PS5", value: 3789.90, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 9, product: "PS5", value: 3789.90, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 10, product: "PS5", value: 3789.00, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 11, product: "PS5", value: 3789.00, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 12, product: "PS5", value: 3789.00, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 13, product: "PS5", value: 3789.00, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 14, product: "PS5", value: 3789.00, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 15, product: "PS5", value: 3789.00, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 16, product: "PS5", value: 3789.00, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 17, product: "PS5", value: 3789.00, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 18, product: "PS5", value: 3789.00, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 19, product: "PS5", value: 3789.00, type: "Eletronicos", code: 11, quantity: 22 },
  { position: 20, product: "PS5", value: 3789.00, type: "Eletronicos", code: 11, quantity: 22 },

]

