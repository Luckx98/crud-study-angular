import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.scss']
})
export class ButtonDeleteComponent implements OnInit {
  @Input() content = 'Excluir';
  @Input() width = "150px";

  constructor() { }

  ngOnInit(): void {
  }

}
