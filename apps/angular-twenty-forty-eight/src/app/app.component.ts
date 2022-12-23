import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-layouts>
      <router-outlet></router-outlet>
    </app-layouts>
  `,
})
export class AppComponent {
  title = 'angular-twenty-forty-eight';
}
