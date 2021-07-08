import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/contact/models/contact';

@Component({
  selector: 'app-contact-list',
  template: `<div class="contact-list-container">
    <app-search
      [contacts]="contacts"
      (filterContacts)="updateContactsList($event)"
    ></app-search>
    <app-contact [filteredItems]="filteredItems"></app-contact>
  </div>`,
  styleUrls: ['../../styles/contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  @Input() contacts!: Contact[];
  filteredItems: Contact[] = [];

  constructor(private fb: FormBuilder) {}

  search = this.fb.control('');

  ngOnInit(): void {}

  updateContactsList(contacts: Contact[]): void {
    this.filteredItems = contacts;
  }
}
