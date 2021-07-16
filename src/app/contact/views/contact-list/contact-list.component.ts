import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Contact, INITIAL_CONTACT } from 'src/app/contact/models/contact';

@Component({
  selector: 'app-contact-list',
  template: `
    <div class="contact-list">
      <app-search [search]="search"></app-search>
      <ul class="contact-list__contacts">
        <!--  TODO: After you have combined observables in
              searchResults$ observable insert it here instead of
              contacts$ observable -->
        <app-contact
          class="contact-list__contacts__item"
          *ngFor="let contact of searchResults$ | async"
          [contact]="contact"
        ></app-contact>
      </ul>
    </div>
  `,
  styleUrls: ['../../styles/contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  contacts: Contact[] = INITIAL_CONTACT;

  search = this.fb.control('');

  search$ = this.search.valueChanges;
  /**
   * We will use RxJS of() function to
   * return array of mock contacts as observable
   */
  contacts$ = of(this.contacts);

  /**
   * TODO:
   * Combine search$ and contacts$ into one observable
   * named: searchResults$ that should return contacts$
   * filtered by search$ string
   *
   * Check out the link and choose appropriate combination operator
   * https://www.learnrxjs.io/learn-rxjs/operators/combination
   */

  searchResults$: Observable<Contact[]> = this.search$.pipe(
    switchMap((query) => {
      return this.contacts$.pipe(
        map((res) => {
          return res.filter((item) => {
            return (
              (
                item.firstName.toLowerCase() +
                ' ' +
                item.lastName.toLowerCase()
              ).indexOf(query) > -1
            );
          });
        }),
      );
    }),
  );

  ngOnInit() {}
}
