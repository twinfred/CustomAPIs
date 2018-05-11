import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: string[];
  taskSelect: string[];
  constructor(private _httpService: HttpService){}
  // ngOnInit(){
  //   this.getAllTasksFromService();
  // }
  getAllTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe((data)=>{
      this.tasks = data["data"];
      console.log(this.tasks)
    })
  }
  getSpecificTaskFromService(id){
    console.log(id)
    let observable = this._httpService.getSpecificTask(id);
    observable.subscribe((data)=>{
      this.taskSelect = data["data"];
      console.log("taskSelect:", this.taskSelect)
    })
  }
}
