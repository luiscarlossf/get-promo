import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';

import { CadintePage } from '../pages/cadinte/cadinte';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { InitialPage } from '../pages/initial/initial';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CriarAnuncioPage } from '../pages/criaranuncio/criaranuncio';
import { ConfigPage } from '../pages/config/config';
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { Camera } from '@ionic-native/camera';
import { SQLite } from '@ionic-native/sqlite';

import { CategoriasProvider } from '../providers/categorias/categorias';
import { AnuncioProvider } from '../providers/anuncio/anuncio';
import { DatabaseProvider } from '../providers/database/database';
import { UserProvider } from '../providers/user/user';
import { CadinteProvider } from '../providers/cadinte/cadinte';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InitialPage,
    CadastroPage,
    CriarAnuncioPage,
    ConfigPage,
    ProfilePage,
    EditProfilePage,
    CadintePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InitialPage,
    CadastroPage,
    CriarAnuncioPage,
    ConfigPage,
    ProfilePage,
    EditProfilePage,
    CadintePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    GoogleMaps,
    CategoriasProvider,
    AnuncioProvider,
    File,
    FileChooser,
    FileTransfer,
    FileTransferObject,
    Camera,
    SQLite,
    DatabaseProvider,
    UserProvider,
    CadinteProvider
  ]
})
export class AppModule {}
