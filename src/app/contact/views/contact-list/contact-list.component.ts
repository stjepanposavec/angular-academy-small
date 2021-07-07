import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-list',
  template: `
    <input
      type="text"
      placeholder="Search..."
      [formControl]="search"
      (ngModelChange)="filterItem()"
    />
    <ul>
      <li *ngFor="let contact of filteredItems">
        {{ contact.firstName }}
        {{ contact.lastName }}
        <a [href]="'mailto:' + contact.email">Send mail</a>
      </li>
    </ul>
    <p>{{ search.value }}</p>
  `,
  styles: [],
})
export class ContactListComponent implements OnInit {
  @Input() contacts!: Contact[];
  filteredItems: Contact[] = [];
  search = new FormControl('');

  constructor() {}

  ngOnInit(): void {
    this.filterItem();
  }

  filterItem() {
    if (!this.search) {
      this.filteredItems = this.contacts;
    } else {
      this.filteredItems = this.contacts.filter(
        (item) =>
          (
            item.firstName.toLowerCase() +
            ' ' +
            item.lastName.toLowerCase()
          ).indexOf(this.search.value.toLowerCase()) > -1,
      );
    }
    console.log(this.filteredItems);
  }
}
