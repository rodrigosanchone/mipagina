import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  form: UntypedFormGroup;
  nombre: UntypedFormControl = new UntypedFormControl("", [Validators.required]);
  email: UntypedFormControl = new UntypedFormControl("", [Validators.required, Validators.email]);
  mensaje: UntypedFormControl = new UntypedFormControl("", [Validators.required, Validators.maxLength(256)]);
   telefono: UntypedFormControl = new UntypedFormControl("", [Validators.required]);
  honeypot: UntypedFormControl = new UntypedFormControl(""); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage!: string; // the response message to show to the user
  responseMessage2!: string; // the response message to show to the user
  responseMessage3!: string; // the response message to show to the user
  responseMessage4!: string; // the response message to show to the user
 // the response message to show to the user
  siteKey: string;
  constructor(private formBuilder: UntypedFormBuilder, private http: HttpClient) {
  
    this.form = this.formBuilder.group({
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje,
      telefono: this.telefono,
      honeypot: this.honeypot
    });
  }
  ngOnInit(): void {
  }
  onSubmit(e:Event) {
    e.preventDefault();
    if(this.nombre.value.length < 3){
      this.responseMessage = "Este campo debe de tener minimo 3 caracteres";
      setInterval(()=>{
        this.responseMessage = "";
      },4000);   
    }
    
     if(!this.email.valid){
      this.responseMessage2 = "Debe ingresar un email valido";
      setInterval(()=>{
        this.responseMessage2 = "";
      },4000);  
    }
   

    if(!this.mensaje.value ){
      this.responseMessage4 = "Debe ingresar el mensaje.";
      setInterval(()=>{
        this.responseMessage4 = "";
      },4000);  
    } 
    
     if(!this.nombre.value || !this.email.valid || !this.mensaje.value){
      Swal.fire({
        title: 'Error!',
        text: 'Faltan datos que rellenar',
        icon: 'error',
        confirmButtonText: 'Volver'
      })
     }else{
      emailjs.sendForm('service_kwv3ht8', 'template_ftcal99', e.target as HTMLFormElement, 'zwIzwnKmBo1nR7wmu')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      Swal.fire({
        title: 'Enviado!',
        text: 'Gracias por contactarme, pronto te contactara',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      this.form.reset()
     }
  
 
    

    }
  

}
