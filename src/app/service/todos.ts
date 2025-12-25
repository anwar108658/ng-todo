import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Todos {
  
  constructor(private http:HttpClient){}

  saveTodo(user:object){
    const url = "http://localhost:3000/todos"
    return this.http.post(url,user);
  }
}
