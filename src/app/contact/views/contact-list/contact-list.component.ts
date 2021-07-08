import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-list',
  template: `<app-search
      [contacts]="contacts"
      (filterContacts)="updateContactsList($event)"
    ></app-search>
    <app-contact [filteredItems]="filteredItems"></app-contact>`,
  styles: [],
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
