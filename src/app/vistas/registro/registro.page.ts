import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

/* aqui podemos crear una variable 

  NOMBRE: TIPO = VALOR;  
  NOMBRE = CLASE(VALOR);   */

  persona = new FormGroup({
    rut: new FormControl('', [Validators.required, Validators.pattern("[0-9]{7,8}-[0-9kK]{1}")]),
    nombre: new FormControl('', [Validators.minLength(3), Validators.required, Validators.pattern("[a-z]{3,10}")]),
    fecha_nacimiento: new FormControl('',[Validators.required]),
    genero: new FormControl('',[Validators.required]),
    es_terrano: new FormControl('',[Validators.required]),
    Nombre_planeta: new FormControl('',[Validators.required])
  });
  public alertButtons =[
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
      },
    },
  ];



  constructor(private router: Router) { }

  ngOnInit() {
  }
  registrar():void{
    /* validaciones o guardar datos llamar a un DAO? conversión */
    console.log(this.persona.value);
   /*  alert("registrado"); */
    this.router.navigate(['/home']);
    
  }

  /* solo de ejemplo */
  /* habilitar_boton():boolean {
    if(this.persona.valid){
      return false;
    }
    return true;
  } */

    setResult(ev:any) {
      console.log(`Dismissed with role: ${ev.detail.role}`);
    }

  


}
