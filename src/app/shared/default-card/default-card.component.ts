import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-default-card',
    templateUrl: './default-card.component.html',
    styleUrls: ['./default-card.component.scss']
})
export class DefaultCardComponent implements OnInit{
    @Input() width = "890px";

    constructor(){}

    ngOnInit(){

    }
}