import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SearchPage } from '../pages/search/search';
import { SearchOymPage } from '../pages/search-oym/search-oym';
import { ActasPage } from '../pages/actas/actas';
import { ProgrammationPage } from '../pages/programmation/programmation';
import { OymPage } from '../pages/oym/oym';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any,icon: string}>;

  constructor( public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title:'Inicio', component: HomePage ,icon:"home"},
      { title: 'Actas', component: ActasPage ,icon:"book"},
      { title: 'OyM', component: OymPage ,icon:"hammer"},
      { title: 'Programación', component: ProgrammationPage ,icon:"calendar" },
      { title: 'Buscar', component: SearchPage ,icon:"search"},
      { title: 'Buscar OyM', component: SearchOymPage ,icon:"card"}
      

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

  openPage(pages) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(pages.component);
  }

}
