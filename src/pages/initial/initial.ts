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
      var infoUser = {
          apelido: result['apelido'],
          nome: result['nome'],
          email: result['email'],
          permissao: result['permissao']
      };
      if (result['email'] == this.emailText){
        console.log(result)
        this.loading.dismiss();
        this.navCtrl.setRoot(HomePage, infoUser);
      }else{
        this.loading.dismiss();
        this.presentToast(result);
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
