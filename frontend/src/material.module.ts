import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
    exports: [
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatDialogModule,
        MatTooltipModule,
        MatIconModule
    ]
})
export class MaterialDependencyModule {
}
