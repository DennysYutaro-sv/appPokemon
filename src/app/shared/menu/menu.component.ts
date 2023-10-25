import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {


  items: MenuItem[]=[];

  constructor(private router:Router) { }


  ngOnInit(): void {
    this.items=[
      {
          label:'Lista de pokemones',
          icon:'pi pi-fw pi-users',
          routerLink: '/pokemones'
      }
  ];
  }

}
