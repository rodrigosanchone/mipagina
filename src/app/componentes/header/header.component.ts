import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

declare var navegacionResponsive:any;// par atilizar la funcion de js

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  funcion1(){
    navegacionResponsive();
  }
  constructor() {
    
   
   }

  
  
  ngOnInit(): void {
   
  }

}
