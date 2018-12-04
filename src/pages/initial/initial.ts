import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';

/**
 * Generated class for the InitialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-initial',
  templateUrl: 'initial.html',
})
export class InitialPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitialPage');
  }

  buttonPressed() {
   var infoUser = {
        apelido: 'lui',
        nome: 'Luis Carlos',
        email: 'luiscarlos.sf@outlook.com',
        permissao: 2,
        categoria1: 1,
        categoria2: 2,
        categoria3: 3
    };
 	  this.navCtrl.setRoot(HomePage, infoUser);
  }
  
  cadastrar() {
 	  this.navCtrl.push(CadastroPage);
  }

}