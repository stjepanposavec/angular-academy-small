import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <a routerLink="/home">Home</a>
      <a routerLink="/contacts">Contacts</a>
    </nav>
  `,
  styles: [],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
