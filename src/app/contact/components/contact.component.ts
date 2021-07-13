import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact',
  template: `
    <li class="contact">
      <img class="contact__image" [src]="contact.imageUrl" alt="user-photo" />
      <div class="contact__info">
        <span class="contact__info__name"
          >{{ contact.firstName }} {{ contact.lastName }}</span
        >
        <span class="contact__info__dob">{{
          formatDate(contact.dateOfBirth)
        }}</span>
      </div>
      <a class="contact__button" [href]="'mailto:' + contact.email"
        >Send email</a
      >
    </li>
  `,
  styleUrls: ['../styles/contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() contact!: Contact;

  constructor() {}

  ngOnInit(): void {}

  formatDate(milis: number): string {
    const date = new Date(milis);
    return date.toLocaleDateString();
  }
}
