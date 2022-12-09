import { StorageService } from './../services/storage.service';
import { Storage } from '@ionic/storage-angular';
import { Usuario } from './../models/usuario';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  listaUsuarios: Usuario[] = [];
  constructor(private storageService: StorageService) {}

  async buscarUsuarios(){
    this.listaUsuarios = await this.storageService.getAll();
  }

  ionViewDidEnter(){
    this.buscarUsuarios();
  }

  excluirCadastro(email: string){
    this.storageService.remove(email);
  }
}
