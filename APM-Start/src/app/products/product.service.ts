import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ProductService {
    //request URL
    private prodUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.prodUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMsg = '';
        if (err.error instanceof ErrorEvent) {
            errorMsg = `An error occupied: ${err.error.message}`;
        } else {
            errorMsg = `Server returned: ${err.status}, message is: ${err.message}`;
        }
        console.log(errorMsg);
        return throwError(() => errorMsg);
    }
}