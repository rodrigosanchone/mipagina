import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';

//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule,SETTINGS } from '@angular/fire/compat/firestore';
/* import { AngularFireStorageModule,BUCKET} from '@angular/fire/storage'; */

//servicios
import { ProyectosService } from './servicios/proyectos.service';
import { HeaderComponent } from './componentes/header/header.component';
import { SliderComponent } from './componentes/slider/slider.component';

import { IndexComponent } from './componentes/index/index.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

//form
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

//recapctha
import { NgxCaptchaModule } from 'ngx-captcha';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    ContactoComponent,
    SobremiComponent,
    ProyectosComponent
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore,'rodrigosancho'),
    AngularFirestoreModule,

    ReactiveFormsModule,
    HttpClientModule,
   // NgxCaptchaModule
  ],
  providers: [
    ProyectosService,
  /*   {provide:BUCKET,useValue:'rodrigosancho-8e447'}, */
    {provide: SETTINGS,useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
