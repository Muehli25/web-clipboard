import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialDependencyModule} from 'src/material.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ClipboardModule} from "@angular/cdk/clipboard";
import {TokenDialogComponent} from './token-dialog/token-dialog.component';
import {QRCodeModule} from "angularx-qrcode";

@NgModule({
    declarations: [
        AppComponent,
        TokenDialogComponent
    ],
    imports: [
        BrowserModule,
        QRCodeModule,
        HttpClientModule,
        NoopAnimationsModule,
        ClipboardModule,
        MaterialDependencyModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
