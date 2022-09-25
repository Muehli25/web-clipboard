import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Transfer} from "./model/transfer.dto";
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ClipboardService {

    constructor(private http: HttpClient) {
    }

    getClipboard(token: number) {
        let queryParams = new HttpParams();
        queryParams = queryParams.append("token",token);

        return this.http.get<Transfer>(environment.backendUri, {params:queryParams});
    }

    postClipboard(clipboard: string) {
        return this.http.post<Transfer>(environment.backendUri, new Transfer(clipboard));
    }
}
