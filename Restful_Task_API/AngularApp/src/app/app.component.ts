import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "app";
  tasks: string[];
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getAllTasksFromService();
  }
  getAllTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe((data)=>{
      console.log(data["data"][0]["title"]);
      this.tasks = data["data"];
    })
  }
}
