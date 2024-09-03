import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  persona = new FormGroup({

    rut: new FormControl(),
    nombre: new FormControl(),
    fecha_nacimiento: new FormControl(),
    genero: new FormControl(),
    tiene_equipo: new FormControl(),
    nombre_equipo: new FormControl()

  });
}
