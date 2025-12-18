import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-navbar',
  imports: [ButtonModule,InputIcon,InputTextModule,IconField],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  navMenu = signal([
    {id:1,title:"Home",icon:"pi pi-home",route:""},
    {id:2,title:"About",icon:"pi pi-info-circle",route:""},
    {id:3,title:"Contact",icon:"pi pi-phone",route:""},
  ])
}
