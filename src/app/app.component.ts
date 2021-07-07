import { Component } from '@angular/core';
import { Contact, INITIAL_CONTACT } from './models/contact';

@Component({
  selector: 'app-root',
  template: `<app-contact [contact]="contact"></app-contact>`,
  styles: [],
})
export class AppComponent {
  contact: Contact = INITIAL_CONTACT;
}
