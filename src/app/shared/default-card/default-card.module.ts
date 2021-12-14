import { NgModule } from "@angular/core";
import { DefaultCardComponent } from "./default-card.component";
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [
        DefaultCardComponent,
    ],
    imports: [
        MatCardModule,
    ],
    exports: [
        DefaultCardComponent,
    ],
})
export class DefaultCardModule { }