import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SearchPage } from '../pages/search/search';
import { SearchOymPage } from '../pages/search-oym/search-oym';
import { ActasPage } from '../pages/actas/actas';
import { ProgrammationPage } from '../pages/programmation/programmation';
import { OymPage } from '../pages/oym/oym';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SearchPage,
    SearchOymPage, 
    ActasPage,
    ProgrammationPage,
    OymPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SearchPage,
    SearchOymPage, 
    ActasPage,
    ProgrammationPage,
    OymPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
