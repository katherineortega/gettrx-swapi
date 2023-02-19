import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable()
export class HttpClientService {

  constructor(private http: HttpClient) {
  }

  public httpGet<T>(endpoint: string, params: HttpParams = {} as HttpParams): Observable<T>{
    const httpOptions: {params?: HttpParams} = {};
    if (params) httpOptions.params = params;
    return this.http.get<T>(endpoint, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  public log(message: string, showLogs = !environment.production): boolean {
    if (!showLogs) {
      console.log(message);
      return true;
    }
    return false
  }

}
