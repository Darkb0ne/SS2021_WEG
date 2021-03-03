import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Stockvalueservice {

    constructor(private http: HttpClient) { }

    getStockValues() {
        return this.http.get<any>('assets/stockvalues.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }
}

