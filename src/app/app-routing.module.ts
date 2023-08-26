import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './componentes/index/index.component';
 import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { ContactoComponent } from './componentes/contacto/contacto.component'; 
const routes: Routes = [
  {path:'', component: IndexComponent },
  {path:'inicio', component: IndexComponent},
 {path:`sobremi`,component:SobremiComponent},
  {path:`proyectos`,component:ProyectosComponent},
 {path:`contacto`,component:ContactoComponent} 
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
