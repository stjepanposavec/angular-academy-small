import { Component, Input, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-search',
  template: `
    <input
      class="search"
      type="text"
      placeholder="Search for the Customer"
      [formControl]="search"
    />
  `,
  styleUrls: ['../styles/search.component.css']
})
export class SearchComponent implements OnInit {
  @Input()
  search!: FormControl

  constructor () {}

  // search = this.fb.control('');

  ngOnInit (): void {}

  // sendValue () {
  //   this.query.emit(this.search.value)
  // }
}
