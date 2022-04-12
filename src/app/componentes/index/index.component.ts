import { Component, OnInit } from '@angular/core';
import {ProyectosService} from '../../servicios/proyectos.service'
import {Proyecto} from '../../modelos/proyecto.modelo'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  proyectos!: Proyecto[];
  proyecto: Proyecto={
    titulo:'',
    info: '',
    url: '',
    img: ''
  }

  constructor(private proyectosServicios: ProyectosService) { }

  ngOnInit():void {
    this.proyectosServicios.ultimos().subscribe(
      proyectos=>{
        this.proyectos=proyectos;
    /*   console.log(this.proyectos) */
      }
    )
  }

}
