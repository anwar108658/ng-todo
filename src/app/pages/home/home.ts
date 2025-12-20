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


@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule,FormsModule,Button,DrawerModule,DialogModule,InputTextModule,FloatLabelModule,IftaLabelModule,DatePickerModule,TextareaModule,SelectModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})


export class Home implements OnInit {
  ngOnInit(){
this.scheduleDaily352()
}
  scheduleDaily352() {
  const now = new Date();
  const target = new Date();

  target.setHours(4, 2, 0, 0);

  if (target <= now) {
    target.setDate(target.getDate() + 1);
  }

  const delay = target.getTime() - now.getTime();

  setTimeout(() => {
    console.log('🔥 3:58 task');

    // reschedule for next day
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
  popupVisible:boolean = true;
  todoForm = new FormGroup({
    title:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
    priority:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    deadLine:new FormControl('',[Validators.required]),
    comment:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(500)]),
  })

  // for popup > todoform > select option
  selectOption=['Hight','Medium','Low']
}
