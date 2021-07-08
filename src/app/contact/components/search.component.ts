import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/contact/models/contact';

@Component({
  selector: 'app-search',
  template: `
    <input
      class="search-input"
      type="text"
      placeholder="Search for the Customer"
      [formControl]="search"
      (ngModelChange)="filterItem()"
    />
  `,
  styleUrls: ['../styles/search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() contacts!: Contact[];
  @Output() filterContacts = new EventEmitter<Contact[]>();
  filteredItems: Contact[] = [];

  constructor(private fb: FormBuilder) {}

  search = this.fb.control('');

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

    this.filterContacts.emit(this.filteredItems);
  }
}
