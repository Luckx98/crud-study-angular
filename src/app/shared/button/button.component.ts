import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() content = 'Criar Novo Item';
  @Input() width = "150px";
  @Input() disabled = false;
  @Output() buttonClick= new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

}
