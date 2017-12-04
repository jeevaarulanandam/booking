import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
  <site-header></site-header>`,
})
export class AppComponent  { name = 'Booking'; }
