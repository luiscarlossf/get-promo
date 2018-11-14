import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InitialPage } from '../pages/initial/initial';
import { ConfigPage } from '../pages/config/config';
import { DatabaseProvider } from '../providers/database/database';
import { UserProvider } from '../providers/user/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InitialPage; //Deve ser a tela de login
  
  pages: Array<{title: string, component: any}>;

  user: any;
  config: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private alertCtrl: AlertController, private dbProvider: DatabaseProvider, private uProvider: UserProvider) {
    this.initializeApp();
    this.dbProvider.createDatabase();
    this.user = this.uProvider.get('lui');
    

    // used for an example of ngFor and navigation
    //this.config = ConfigPage();
    //this.config.user = this.user;
    console.log(this.user.apelido);

    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Configuração', component: ConfigPage}
    ];

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
    this.nav.setRoot(page.component);
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
