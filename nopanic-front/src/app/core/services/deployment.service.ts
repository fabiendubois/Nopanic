import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deployment } from '../models/deployment.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DeploymentService {

    constructor(private http: HttpClient) { }

    getAll(application?: string, _environment?: string): Observable<Deployment[]> {
        let url = `${environment.api}/deployments`

        if (application) {
            url += `/?application=${application}`
        } else if (_environment) {
            url += `/?environment=${_environment}`
        }

        return this.http.get<Deployment[]>(url);
    }
}