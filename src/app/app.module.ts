import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CadintePage } from '../pages/cadinte/cadinte';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InitialPage } from '../pages/initial/initial';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { ConfigPage } from '../pages/config/config';
import { SQLite } from '@ionic-native/sqlite';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from  '@angular/common/http';
import { DatabaseProvider } from '../providers/database/database';
import { UserProvider } from '../providers/user/user';
import { InitialPageModule } from '../pages/initial/initial.module';
import { CadinteProvider } from '../providers/cadinte/cadinte';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    ConfigPage,
    //CadintePage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    InitialPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InitialPage,
    CadastroPage,
    ConfigPage,
    CadintePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    UserProvider,
    CadinteProvider

  ]
})
export class AppModule {}
