import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formsCadastro: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formsCadastro = this.formBuilder.group({

      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(8)])],

    });
  }

  ngOnInit() {
  }

  salvarCadastro() {
    console.log('Fomulário: ', this.formsCadastro.valid);
  }
}
