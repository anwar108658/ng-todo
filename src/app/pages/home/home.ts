import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Button } from "primeng/button";
import { DialogModule } from 'primeng/dialog';
import { DrawerModule } from 'primeng/drawer';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule,FormsModule,Button,DrawerModule,DialogModule,InputTextModule,FloatLabelModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  visible:boolean = false;
  popupVisible:boolean = true;

  sideMenu = signal([
    {id:1,title:"Today",icon:"pi pi-pen-to-square"},
    {id:2,title:"Pending",icon:"pi pi-calendar-clock"},
    {id:3,title:"Completed",icon:"pi pi-check"},
  ])

  todoForm = new FormGroup({
    title:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
    priority:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    deadLine:new FormControl('',[Validators.required]),
    comment:new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(500)]),
  })
}
