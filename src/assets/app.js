

  const iconoMenu= document.querySelector('.movil-menu');
  iconoMenu.addEventListener('click',navegacionResponsive)
 
 function navegacionResponsive(){
    // alert('hola ');
     const navegacion= document.querySelector(".navegacion");
     navegacion.classList.toggle("mostrar")
    
   }
 
 
   function animationIntervalo(){
    
     if(document.querySelector(".mibici")){
     const bici = document.querySelector(".mibici");
     bici.classList.toggle('animacion');
     }
   
   }
 
 setInterval(()=>{
   animationIntervalo();
 },5000);
 animationIntervalo();
  

