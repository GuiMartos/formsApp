import { StorageService } from './../services/storage.service';
import { Usuario } from './../models/usuario';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formsCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder, private storageService: StorageService) {
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

  async salvarCadastro(){
    if(this.formsCadastro.valid){
    this.usuario.nome = formsCadastro.values.nome;
    this.usuario.cpf = formsCadastro.values.cpf;
    this.usuario.email = formsCadastro.values.email;
    this.usuario.email = formsCadastro.values.email;
      awhit this.storageService.set(this.usuario.email, this usuario);

  }else{
    alert('Formulário invalido');
  }
}

}
