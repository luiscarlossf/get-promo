import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,ToastController } from 'ionic-angular';
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
  loading: any;
  emailText: string = '';
  senhaText: string = '';
  data: any;
  constructor(public navCtrl: NavController,public toastCtrl: ToastController, public loadingCtrl: LoadingController, public navParams: NavParams, private uProvider: UserProvider){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InitialPage');
  }

  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Autenticando...'
    });

    this.loading.present();
  }

  Login() {
    this.showLoader()
    // console.log('entrei no Login');
    // console.log(this.emailText);
    this.uProvider.login(this.emailText,this.senhaText).then((result) => {
      this.data = result;
      this.navCtrl.setRoot(HomePage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: "E-mail ou Senha incorreto",
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
