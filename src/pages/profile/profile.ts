import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { EditProfilePage } from '../edit-profile/edit-profile';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editarPerfil(){
    this.navCtrl.push(EditProfilePage, {
      apelido: 'rafesley',
      email: 'eu@icloud.com',
      nome: 'Wesley',
      categ1: 'Esporte',
      categ2: 'Eletronicos',
      categ3: 'Higiene'
    });
  }

}
