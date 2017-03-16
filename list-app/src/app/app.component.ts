import { Component } from '@angular/core';
import { ListComponent } from './list';

@Component({
  selector: 'app-root',
  template: `
    <h1>Julio's Lists</h1>
    <app-list></app-list>
  `,
  styles: [`
    h1,p {
    font-family: 'Raleway', sans-serif;
    }
  `],
  entryComponents: [ListComponent]
})
export class AppComponent {
}
