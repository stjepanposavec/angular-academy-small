import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `<app-navigation class="navigation"></app-navigation>`,
  styleUrls: ['../styles/header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
