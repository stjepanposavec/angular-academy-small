import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact',
  template: ` <ul>
    <li *ngFor="let contact of filteredItems">
      {{ contact.firstName }}
      {{ contact.lastName }}
      <a [href]="'mailto:' + contact.email">Send mail</a>
    </li>
  </ul>`,
  styles: [],
})
export class ContactComponent implements OnInit {
  @Input() filteredItems!: Contact[];

  constructor() {}

  ngOnInit(): void {}
}
