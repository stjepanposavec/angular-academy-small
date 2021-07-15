import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav class="navigation">
      <a class="navigation__item" routerLink="/home">Home</a>
      <a class="navigation__item" routerLink="/contacts">Contacts</a>
    </nav>
  `,
  styleUrls: ['../styles/navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
