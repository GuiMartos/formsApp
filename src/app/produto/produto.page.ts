import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
  formsCadastro: FormGroup;


  constructor(private formBuilder: FormBuilder) {

    this.formCadastro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      valor: ['', Validators.compose([Validators.required, Validators.minLength(3)])],

    });

    salvarCadastro(){
      console.log('Fomulário: ', this.formsCadastro.valid);
    }

  ngOnInit() {
  }

}
}
