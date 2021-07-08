import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-search',
  template: `
    <input
      type="text"
      placeholder="Search..."
      [formControl]="search"
      (ngModelChange)="filterItem()"
    />
  `,
  styles: [],
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
