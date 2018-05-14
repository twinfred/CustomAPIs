import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient){  }

  getTasks(){
    return this._http.get('/tasks');
  }

  getSpecificTask(id){
    return this._http.get('/tasks/'+id);
  }

  addTask(data){
    return this._http.post('/tasks', data);
  }

  editTask(id, data){
    return this._http.put('/tasks/'+id, data);
  }

  deleteTask(id){
    return this._http.delete('/tasks/'+id);
  }
}
