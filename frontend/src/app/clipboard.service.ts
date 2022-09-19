import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transfer} from "./model/transfer.dto";
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ClipboardService {

    constructor(private http: HttpClient) {
    }

    getClipboard() {
        return this.http.get<Transfer>(environment.backendUri);
    }

    postClipboard(clipboard: string) {
        return this.http.post<Transfer>(environment.backendUri, new Transfer(clipboard));
    }
}
