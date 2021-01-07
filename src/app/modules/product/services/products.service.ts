import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { ProductModel } from 'src/app/modules/product/models/product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, concatMap, retry, share } from 'rxjs/operators';

@Injectable()
export class ProductService {

    private baseUrl = 'http://localhost:3000';

    constructor(private httpClient: HttpClient) {
    }

    getProducts(): Observable<ProductModel[]> {

        const url = `${this.baseUrl}/products`;

        return this.httpClient
            .get<ProductModel[]>(url)
            .pipe(
                retry(3),
                share(),
                catchError(this.handleErrorFromObservable)
            );
    }

    getProductById(id: number): Promise<ProductModel> {

        const url = `${this.baseUrl}/products/${id}`;

        return this.httpClient
            .get(url)
            .toPromise()
            .then(response => response as ProductModel)
            .catch(this.handleErrorFromPromise);
    }

    updateProduct(product: ProductModel): Observable<ProductModel> {
        const url = `${this.baseUrl}/products/${product.id}`;

        return this.httpClient
            .put<ProductModel>(url, product)
            .pipe(catchError(this.handleErrorFromObservable));
    }

    addProduct(product: ProductModel): Promise<ProductModel> {
        const url = `${this.baseUrl}/products`;

        return this.httpClient
            .post<ProductModel>(url, product)
            .toPromise()
            .then(x => x as ProductModel)
            .catch(this.handleErrorFromPromise);
    }

    deleteProduct(product: ProductModel): Observable<ProductModel[]> {
        const url = `${this.baseUrl}/products/${product.id}`;

        return this.httpClient
            .delete<ProductModel>(url)
            .pipe(
                concatMap(() => this.getProducts()),
                catchError(this.handleErrorFromObservable));
    }

    private handleErrorFromPromise(error: any): Promise<any> {
        console.error('An error occurred:', error);
        return Promise.reject(error.message || error);
    }

    private handleErrorFromObservable(err: HttpErrorResponse) {

        if (err.error instanceof Error) {
            console.error('An error occurred:', err.error.message);
        } else {
            console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
        }

        return throwError('Something bad happened; please try again later.');
    }
}
