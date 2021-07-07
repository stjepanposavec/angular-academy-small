import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-list',
  template: `
    <div *ngFor="let contact of contacts">
      <ul>
        <li>{{ contact.firstName }}</li>
      </ul>
    </div>
  `,
  styles: [],
})
export class ContactListComponent implements OnInit {
  @Input() contacts!: Contact[];

  constructor() {}

  ngOnInit(): void {}
}
