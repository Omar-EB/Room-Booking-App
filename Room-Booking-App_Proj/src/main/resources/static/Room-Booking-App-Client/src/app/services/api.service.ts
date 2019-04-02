import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

import { Room } from '../models/room.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8080/';
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) { }

  getRooms(): Observable<any> {
    let requestUrl = this.baseUrl + '/rooms';
    return this.http.get(requestUrl, this.options).pipe(
      map((response: Response) => response.json()),
      catchError((error: HttpErrorResponse) => {
        return Observable.throw(error || 'SERVER ERROR')
        })
    );
  }



}
