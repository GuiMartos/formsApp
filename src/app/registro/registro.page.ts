import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formsCadastro: FormGroup;

  constructor(private formBuilder : FormBuilder) {
    this.formsCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.compose([Validators.required])],
      email:['', Validators.compose([Validators.required, Validators.email])],
      senha:['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(8)])],
      telefone: ['',Validators.compose([Validators.required])],
      confirmarSenha:['', Validators.compose([Validators.required,Validators.minLength(6),Validators.maxLength(8)])]

    });
   }

  ngOnInit() {
  }

  salvarCadastro(){
    console.log('Fomulário: ', this.formsCadastro.valid);
  }
}
