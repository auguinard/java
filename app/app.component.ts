import { Component } from '@angular/core';

import { Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {RouterEvent} from '@angular/router';
import { Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
      {
          title: 'Connexion',
          url: '/connexion',
          icon: 'log-in',
      },
      {
          title: 'Incription',
          url: '/inscription',
          icon: 'create',
      },
      {
          title: 'A propos',
          url: '/a_propos',
          icon: 'information-circle',
      },
      {
          title: 'Aide',
          url: '/aide',
          icon: 'help-circle',
      },
      {
        title: 'CATEGORIES',
      },
      {
        title: 'Feculent',
        url: '/feculent',
        icon: 'folder',
      },
      {
          title: 'Cereales',
          url: '/cereals',
          icon: 'folder',
      },
      {
          title: 'Fruits',
          url: '/fruits',
          icon: 'folder',
      },
      {
          title: 'Legumes',
          url: '/legumes',
          icon: 'folder',
      },
      {
          title: 'Feuilles',
          url: '/feuilles',
          icon: 'folder',
      },
  ];
    selectedPath = '';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
  ) {
    this.initializeApp();
      this.router.events.subscribe((event: RouterEvent) => {
          this.selectedPath = event.url;
      });
  }

  initializeApp() {
  }

}
