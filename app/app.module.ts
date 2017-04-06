import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Login } from '../pages/Login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Global, Aplicacion } from "../services/global.service";
import { CheckList } from '../pages/check-list/check-list';

// import { LoginService } from '../services/login.service'

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Login,
    CheckList
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Login,
    CheckList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Global,
    Aplicacion,
    // LoginService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
