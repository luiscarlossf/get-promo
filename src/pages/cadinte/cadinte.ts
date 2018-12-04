import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CadinteProvider } from '../../providers/cadinte/cadinte';
import { HomePage } from '../home/home';
/**
 * Generated class for the CadintePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadinte',
  templateUrl: 'cadinte.html',
})
export class CadintePage {
  interesseText: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,private intProvider: CadinteProvider) {
  }

  cadInte(){
    this.intProvider.cadInteresse(this.interesseText).then((result) => {
      if (result == "Categoria já existe"){
        this.presentToast(result);
      }else{
        console.log(result)
        this.presentToast(result['message']);
        this.navCtrl.setRoot(HomePage);
      }})
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
    });

    toast.present();

  }
}
