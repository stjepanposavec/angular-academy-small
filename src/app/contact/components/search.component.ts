import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from 'src/app/contact/models/contact';

@Component({
  selector: 'app-search',
  template: `
    <input
      class="search"
      type="text"
      placeholder="Search for the Customer"
      [formControl]="search"
      (ngModelChange)="sendValue()"
    />
  `,
  styleUrls: ['../styles/search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() query = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  search = this.fb.control('');

  ngOnInit(): void {}

  sendValue() {
    this.query.emit(this.search.value);
  }
}
