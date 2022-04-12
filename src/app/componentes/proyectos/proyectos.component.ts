import { Component, OnInit } from '@angular/core';
import {ProyectosService} from '../../servicios/proyectos.service'
import {Proyecto} from '../../modelos/proyecto.modelo'
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos!: Proyecto[];
    proyecto: Proyecto={
      titulo:'',
      info: '',
      url: '',
      img: ''

    }
  constructor(private proyectosServicios: ProyectosService) { }

  ngOnInit(): void {
    this.proyectosServicios.getProyectos().subscribe(
      proyectos=>{
        this.proyectos=proyectos;
    /*    console.log(this.proyectos) */
      }
    )
  }

}
