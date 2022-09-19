import {Component} from '@angular/core';
import {ClipboardService} from "./clipboard.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'web-clipboard';

    constructor(private clipboardService: ClipboardService) {
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
}
