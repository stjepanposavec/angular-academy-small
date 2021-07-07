import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact',
  template: `<app-contact-list [contacts]="contacts"></app-contact-list>`,
  styles: [],
})
export class ContactComponent implements OnInit {
  @Input() contacts!: Contact[];

  constructor() {}

  ngOnInit(): void {}
}
