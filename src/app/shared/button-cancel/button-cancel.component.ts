import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-cancel',
  templateUrl: './button-cancel.component.html',
  styleUrls: ['./button-cancel.component.scss']
})
export class ButtonCancelComponent implements OnInit {
  @Input() content = 'Cancelar';

  constructor() { }

  ngOnInit(): void {
  }

}
