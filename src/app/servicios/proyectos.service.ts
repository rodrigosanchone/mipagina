
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import {Proyecto} from '../modelos/proyecto.modelo';

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import {map, finalize} from 'rxjs/operators'
import { query } from '@angular/animations';



@Injectable()
export class ProyectosService {
  proyectosColeccion: AngularFirestoreCollection<Proyecto>;
  proyectosColeccion2: AngularFirestoreCollection<Proyecto>;
  proyectoDoc!: AngularFirestoreDocument<Proyecto>;
  proyectos!:Observable<Proyecto[]>;
  proyecto!:Observable<Proyecto>;
  filePath:any;

  constructor( private db: AngularFirestore,
    private storage: AngularFireStorage,
   private domSanitizer: DomSanitizer,

    ) {
      this.proyectosColeccion = db.collection('proyectos',ref=>ref.orderBy('titulo','asc'));
      this.proyectosColeccion2= db.collection('proyectos',ref=>ref.orderBy('titulo','asc').limitToLast(3));
      const ref = this.storage.ref('path/to/file.pdf');
    
    }
    
    getProyectos(): Observable<Proyecto[]>{
      //Obtener los productos
      this.proyectos = this.proyectosColeccion.snapshotChanges().pipe(
          map(cambios => {
              return cambios.map( accion =>{
                  const datos = accion.payload.doc.data() as Proyecto;
                  datos.id = accion.payload.doc.id;
                  return  datos
              })
          })
      );
      return this.proyectos;
    
   }
     
   ultimos(): Observable<Proyecto[]>{
    //Obtener los productos
  
    this.proyectos = this.proyectosColeccion2.snapshotChanges().pipe(
      map(cambios => {
          return cambios.map( accion =>{
              const datos = accion.payload.doc.data() as Proyecto;
              datos.id = accion.payload.doc.id;
              return  datos
          })
      })
  );
  return this.proyectos;
  
 }
  
  
   
    

  }