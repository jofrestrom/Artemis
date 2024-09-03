import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  persona = new FormGroup({

    rut: new FormControl(),
    nombre: new FormControl(),
    fecha_nacimiento: new FormControl(),
    genero: new FormControl(),
    tiene_equipo: new FormControl(),
    nombre_equipo: new FormControl()

  });
  
  constructor(private router: Router){ }

  ngOnInit() {
  }
    
  public registrar():void{
    console.log(this.persona.value);

    this.router.navigate(['/login']);

  }
}
