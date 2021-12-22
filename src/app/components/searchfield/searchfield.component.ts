import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss']
})
export class SearchFieldComponent implements OnInit {
  searchInput = new FormControl('');

  @Output() applyFilter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  

}
