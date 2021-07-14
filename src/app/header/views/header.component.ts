import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<app-navigation></app-navigation>`,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
