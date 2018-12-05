import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InitialPage } from '../initial/initial';
declare var require:any;


@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {
  nome : string;
  email : string;
  apelido : string;
  senha : string;
  permissao: number;
  constructor(public navCtrl: NavController) {

  }

  cadastrar() {
    var axios = require('axios');
    console.log('in');
    axios.post('http://localhost:8080/usuario/cadastrarUsuario', {
      apelido: this.apelido,
      nome: this.nome,
      senha: this.senha,
      email: this.email,
      foto: 'null',
      permissao: this.permissao
    }).then(function(response){
      console.log(response.data)
    });
      this.navCtrl.setRoot(InitialPage);

  }
}
