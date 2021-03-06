import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { CadintePage } from '../pages/cadinte/cadinte';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { InitialPage } from '../pages/initial/initial';
import { ConfigPage } from '../pages/config/config';
import { ProfilePage } from '../pages/profile/profile';
import { DatabaseProvider } from '../providers/database/database';
import { UserProvider } from '../providers/user/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InitialPage;

  pages: Array<{title: string, component: any}>;

  usuario: {
    apelido: any,
    nome: any,
    email: any,
    permissao: any,
    senha: any,
    categoria1: any,
    categoria2: any,
    categoria3: any
  };


  user: any;
  config: any;

  constructor(public event: Events,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private alertCtrl: AlertController, private dbProvider: DatabaseProvider, private uProvider: UserProvider) {
    this.event.subscribe("userloggedin", (user) => {
        this.usuario = user;
    });
    this.usuario = {
      apelido: '',
      nome: '',
      email: '',
      permissao: '',
      senha: '',
      categoria1: '',
      categoria2: '',
      categoria3: ''
    };
    this.initializeApp();
    this.dbProvider.createDatabase();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Perfil', component: ProfilePage},
    ];


  }

  setData(email: string, nome: string, fav1: number, fav2: number, fav3: number){
    this.usuario.email = email;
    this.usuario.nome = nome;
    this.usuario.categoria1 = fav1;
    this.usuario.categoria2 = fav2;
    this.usuario.categoria3 = fav3;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component,{
      parentPage: this,
      usuario: this.usuario
    });
  }

  openConfig(){
    this.nav.push(ConfigPage, this.usuario);
  }

 cadInteresse(){
   this.nav.push(CadintePage);
 }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirmar logout',
      message: 'Você deseja realmente sair do Get Promo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar clicked');
          }
        },
        {
          text: 'Sair',
          handler: () => {
            this.nav.setRoot(InitialPage);
          }
        }
      ]
    });
    alert.present();
  }

}
