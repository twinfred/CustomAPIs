import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient){  }

  getTasks(){
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/tasks');
  }

  getFirstTask(){
    let tempObservable = this._http.get('/tasks/5af382febce2140510e7fa6d');
    tempObservable.subscribe(data => console.log("Got first task!", data));
    return this._http.get('/tasks/5af382febce2140510e7fa6d');
  }
}
