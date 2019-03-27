import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";

//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/throw';

import {Unit} from '../unit' ;

@Injectable({
  providedIn: 'root'
})
export class UnitService {
  private baseUrl:string = 'http://localhost:8080/units';
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private unit:Unit;
  constructor(private _http:Http) { 
  }

  getUnits (){
    return this._http.get(this.baseUrl,this.options).pipe(
        map((response:Response) => response.json()) , 
        catchError((error: HttpErrorResponse) => {
            return Observable.throw(error || 'SERVER ERROR')
        })
    );
  }

  getUnit(id:Number){
    return this._http.get(this.baseUrl+'/'+id,this.options).pipe(
        map((response:Response) => response.json()) , 
        catchError((error: HttpErrorResponse) => {
            return Observable.throw(error || 'SERVER ERROR')
        })
    );  
  }

  deletetUnit(id:Number){
    return this._http.delete(this.baseUrl+'/'+id,this.options).pipe(
        map((response:Response) => response.json()) , 
        catchError((error: HttpErrorResponse) => {
            return Observable.throw(error || 'SERVER ERROR')
        })
    );  
  }

  createUnit(unit:Unit){
    return this._http.post(this.baseUrl, JSON.stringify(unit),this.options).pipe(
        map((response:Response) => response.json()) , 
        catchError((error: HttpErrorResponse) => {
            return Observable.throw(error || 'SERVER ERROR')
        })
    );  
  }

  updateUnit(unit:Unit){
    return this._http.put(this.baseUrl, JSON.stringify(unit),this.options).pipe(
        map((response:Response) => response.json()) , 
        catchError((error: HttpErrorResponse) => {
            return Observable.throw(error || 'SERVER ERROR')
        })
    );
  }

  setter(unit:Unit){
      this.unit=unit;
  }

  getter(){
      return this.unit;
  }
}
