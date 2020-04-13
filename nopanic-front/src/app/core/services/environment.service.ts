import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class EnvironmentService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<string[]> {
        return this.http.get<string[]>(`${environment.api}/environments`);
    }
}