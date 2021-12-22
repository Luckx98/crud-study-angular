import { NgModule } from "@angular/core";
import { ButtonDeleteComponent } from "./button-delete.component";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        ButtonDeleteComponent,
    ],
    imports: [
        MatButtonModule,
    ],
    exports: [
        ButtonDeleteComponent,
    ],
})
export class ButtonDeleteModule { }