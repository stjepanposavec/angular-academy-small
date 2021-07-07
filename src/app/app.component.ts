import { Component } from '@angular/core';
import { Contact, INITIAL_CONTACT } from './models/contact';

@Component({
  selector: 'app-root',
  template: `<app-contact [contacts]="contacts"></app-contact>`,
  styles: [],
})
export class AppComponent {
  contacts: Contact[] = INITIAL_CONTACT;
}
