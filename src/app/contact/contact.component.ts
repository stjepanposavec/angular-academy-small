import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact',
  template: ` <p>{{ contact.firstName }}</p> `,
  styles: [],
})
export class ContactComponent implements OnInit {
  @Input() contact!: Contact;

  constructor() {}

  ngOnInit(): void {}
}
