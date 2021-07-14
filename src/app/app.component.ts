import { Component } from '@angular/core';
import { Contact, INITIAL_CONTACT } from './contact/models/contact';

@Component({
  selector: 'app-root',
  template: ` <app-header></app-header>
    <router-outlet></router-outlet>`,
  styles: [],
})
export class AppComponent {}
