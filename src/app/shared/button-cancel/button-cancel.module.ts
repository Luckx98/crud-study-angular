import { NgModule } from "@angular/core";
import { ButtonCancelComponent } from "./button-cancel.component";
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        ButtonCancelComponent,
    ],
    imports: [
        MatButtonModule,
    ],
    exports: [
        ButtonCancelComponent,
    ],
})
export class ButtonCancelModule { }