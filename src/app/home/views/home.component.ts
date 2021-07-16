import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: ` <h1 class="title">Homepage</h1> `,
  styleUrls: ['../styles/home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
