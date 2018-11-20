import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';

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
  usuario: string = '';
  senha: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private uProvider: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitialPage');
  }

  Login() {
    this.uProvider.login(this.usuario,this.senha);
    this.navCtrl.setRoot(InitialPage);
  }

}
export class User {
  email: string;
  password: string;
}
