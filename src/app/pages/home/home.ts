import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from "primeng/button";
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { DrawerModule } from 'primeng/drawer';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IftaLabelModule } from 'primeng/iftalabel';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { Todos } from '../../service/todos';


@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule,FormsModule,Button,DrawerModule,DialogModule,InputTextModule,FloatLabelModule,IftaLabelModule,DatePickerModule,TextareaModule,SelectModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})


export class Home implements OnInit {

  constructor(private todoService:Todos){}

  ngOnInit(){
  this.scheduleDaily352()
}

scheduleDaily352() {
  const now = new Date();
  const target = new Date();

  target.setHours(17, 54, 0, 0);
  if (target <= now) {
    target.setDate(target.getDate() + 1);
  }
  
  const delay = target.getTime() - now.getTime();
  console.log(delay,target)

  setTimeout(() => {
    console.log('🔥 TASK FIRED AT', new Date().toLocaleTimeString());
    this.scheduleDaily352();
  }, delay);
}


  // for sidebar
  visible:boolean = false;
  sideMenu = signal([
    {id:1,title:"Today",icon:"pi pi-pen-to-square"},
    {id:2,title:"Pending",icon:"pi pi-calendar-clock"},
    {id:3,title:"Completed",icon:"pi pi-check"},
  ])

  // for popup Mod
  popupVisible:boolean = false;
  todoForm = new FormGroup({
    title:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
    priority:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    deadLine:new FormControl('',[Validators.required]),
    comment:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(500)]),
  })

  // for popup > todoForm > select option
  selectOption = ['Hight','Medium','Low'];

  
  addTodo(user:any){
    if (!user.valid) {
      return console.log("invalid")
    }
    
    console.log(user)

    this.todoService.saveTodo(user.value).subscribe({
      next(value) {
        console.log(value)
      },
      error(err) {
        console.log("error",err)
      },
    })
  }
}
