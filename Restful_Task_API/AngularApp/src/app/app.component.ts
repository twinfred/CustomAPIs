import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: string[];
  taskSelect: string[] = [];
  newTask: any;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.newTask = {title: "", description: ""};
  }

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

  addTask(){
    console.log(this.newTask);
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log(data);
      this.newTask = {title: "", description: ""};
      this.getAllTasksFromService();
    })
  }

  editTask(id){
    console.log(id);
    let observable = this._httpService.editTask(id, this.taskSelect);
    observable.subscribe(data => {
      console.log(data);
      this.taskSelect = data["data"];
      this.getSpecificTaskFromService(id);
      this.getAllTasksFromService();
    })
  }

  deleteTask(id){
    console.log(id);
    let observable = this._httpService.deleteTask(id);
    observable.subscribe(data => {
      console.log(data);
      this.taskSelect = [];
      this.getAllTasksFromService();
    })
  }
}
