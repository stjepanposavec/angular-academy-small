import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact',
  template: ` <ul class="contact-list">
    <li class="contact" *ngFor="let contact of filteredItems">
      <div class="contact-info-container">
        <img
          class="contact-user-img"
          [src]="contact.imageUrl"
          alt="user-photo"
        />
        <div class="contact-info">
          <span class="contact-info-name"
            >{{ contact.firstName }} {{ contact.lastName }}</span
          >
          <span class="contact-info-dob">{{ contact.dateOfBirth }}</span>
        </div>
      </div>
      <a class="contact-btn-send-email" [href]="'mailto:' + contact.email"
        >Send email</a
      >
    </li>
  </ul>`,
  styleUrls: ['../styles/contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() filteredItems!: Contact[];

  constructor() {}

  ngOnInit(): void {}
}
