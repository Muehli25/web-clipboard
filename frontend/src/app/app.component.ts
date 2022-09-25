import {Component} from '@angular/core';
import {ClipboardService} from "./clipboard.service";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";
import {MatDialog} from "@angular/material/dialog";
import {TokenDialogComponent} from "./token-dialog/token-dialog.component";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'web-clipboard';

    constructor(private clipboardService: ClipboardService,
                private matIconRegistry: MatIconRegistry,
                private domSanitizer: DomSanitizer,
                private dialog: MatDialog,
                private route: ActivatedRoute) {
        this.matIconRegistry.addSvgIcon(
            "github",
            this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/github.svg")
        );
    }

    clipboard = ""

    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            if ('token' in params) {
                let token = parseInt(params['token'])
                this.clipboardService.getClipboard(token)
                    .subscribe(response => {
                        this.clipboard = response.clipboard
                    })
            }
        });
    }


    saveClipboard() {
        this.clipboardService.postClipboard(this.clipboard).subscribe(response => {
            this.clipboard = response.clipboard
            let targetUrl = `${window.location.origin}/?token=${response.token}`
            this.dialog.open(TokenDialogComponent, {
                height: '450px',
                width: '800px',
                data: {targetUrl: targetUrl},
            });
        })

    }

    showSourceCode() {
        let url = 'https://github.com/Muehli25/web-clipboard';
        window.open(url, '_blank');
    }
}
