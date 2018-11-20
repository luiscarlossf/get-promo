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
  emailText: string = '';
  senhaText: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, private uProvider: UserProvider){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitialPage');
  }

  Login() {
    console.log('entrei no Login');
    console.log(this.emailText);
    this.uProvider.login(this.emailText,this.senhaText);
  }

}
