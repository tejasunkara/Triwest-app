import { Injectable } from '@angular/core';
import { VeteranProfile } from '../model/veteran-360.model';
import { Http, Response, URLSearchParams } from '@angular/http';
import { RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class Veteran360Service {

    constructor(public http: Http) {}

    private portalServiceUrl = environment.apiUrl + 'api/Veterans'; // URL to web api    

    getVeteranDetailsById(id: number): Observable<VeteranProfile> {
        let searchHeader = new Headers();
        searchHeader.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: searchHeader });
        
        return this.http.get(this.portalServiceUrl + '/' + id, options)
            .map(res => <any>res.json())
            .catch(this.handleError);        
    }
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
