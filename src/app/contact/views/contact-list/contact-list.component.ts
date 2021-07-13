import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/contact/models/contact';

@Component({
  selector: 'app-contact-list',
  template: `<div class="contact-list">
    <app-search (query)="updateSearch($event)"></app-search>
    <ul class="contact-list__contacts">
      <app-contact
        class="contact-list__contacts__item"
        *ngFor="let contact of filteredItems"
        [contact]="contact"
      ></app-contact>
    </ul>
  </div>`,
  styleUrls: ['../../styles/contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  @Input() contacts!: Contact[];
  filteredItems: Contact[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.filterItem('');
  }

  updateSearch(query: string): void {
    this.filterItem(query);
  }

  filterItem(search: string) {
    if (!search) {
      this.filteredItems = this.contacts;
    } else {
      this.filteredItems = this.contacts.filter(
        (item) =>
          (
            item.firstName.toLowerCase() +
            ' ' +
            item.lastName.toLowerCase()
          ).indexOf(search.toLowerCase()) > -1,
      );
    }
  }
}
