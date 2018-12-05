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
import { ProfilePage } from '../pages/profile/profile';
import { EditProfilePage } from '../pages/edit-profile/edit-profile';
import { SQLite } from '@ionic-native/sqlite';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from  '@angular/common/http';
import { DatabaseProvider } from '../providers/database/database';
import { UserProvider } from '../providers/user/user';
import { InitialPageModule } from '../pages/initial/initial.module';
<<<<<<< HEAD
import { CategoriasProvider } from '../providers/categorias/categorias';
=======
import { CadintePageModule } from '../pages/cadinte/cadinte.module';
import { CadinteProvider } from '../providers/cadinte/cadinte';
>>>>>>> dev

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
<<<<<<< HEAD
    //InitialPage,
    ConfigPage,
    ProfilePage,
    EditProfilePage
=======
    ConfigPage,
>>>>>>> dev
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    InitialPageModule,
    CadintePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InitialPage,
    ConfigPage,
    ProfilePage,
    EditProfilePage,
    CadastroPage,
<<<<<<< HEAD
=======
    ConfigPage,
    CadintePage

>>>>>>> dev
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    UserProvider,
<<<<<<< HEAD
    CategoriasProvider
=======
    CadinteProvider
>>>>>>> dev

  ]
})
export class AppModule {}
