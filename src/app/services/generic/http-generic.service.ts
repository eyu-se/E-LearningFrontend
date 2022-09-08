import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})



export abstract class HttpGenericService<T> {
  private readonly APIUrl = environment.APIUrl + this.getResourceUrl();

  constructor(protected httpClient: HttpClient ) {
    console.log(this.APIUrl );
  }

  abstract getResourceUrl(): string;

   getList(): Observable<T> {


    return this.httpClient.get<T>(`${this.APIUrl}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  get(id: string | number): Observable<T> {
    return this.httpClient.get<T>(`${this.APIUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  add(resource: T): Observable<any> {
    return this.httpClient.post(`${this.APIUrl}`, resource)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id: string | number): Observable<any> {
    return this.httpClient.delete(`${this.APIUrl}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(resource: T) {
    return this.httpClient.put(`${this.APIUrl}`,resource)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle the HTTP error here
    console.error(error);
    return throwError('Something wrong happened');
  }
}
