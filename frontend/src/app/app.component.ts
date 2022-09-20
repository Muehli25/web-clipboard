import {Component} from '@angular/core';
import {ClipboardService} from "./clipboard.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'web-clipboard';

    constructor(private clipboardService: ClipboardService, private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
        this.matIconRegistry.addSvgIcon(
            "github",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/github.svg")
        );
    }

    clipboard = ""

    ngOnInit() {
        this.clipboardService.getClipboard()
            .subscribe(response => {
                this.clipboard = response.clipboard
            })
    }


    saveClipboard() {
        this.clipboardService.postClipboard(this.clipboard).subscribe(response => {
            this.clipboard = response.clipboard
        })
    }

    showSourceCode() {
        let url = 'https://github.com/Muehli25/web-clipboard';
        window.open(url, '_blank');
    }
}
