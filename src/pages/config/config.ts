import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { InitialPage } from '../initial/initial';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Tem certeza?',
      message: 'Você deseja realmente excluir sua conta do Get Promo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.navCtrl.setRoot(InitialPage);
          }
        }
      ]
    });
    alert.present();
  }

}
