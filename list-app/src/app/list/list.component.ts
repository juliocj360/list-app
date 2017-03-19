import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <span>
      <h2>good list</h2>
      <button (click)="toggleGoodList()">{{ showGoodList ? 'Hide List' : 'Show List'}}</button>
      <div *ngIf="showGoodList">
        <ul>
          <li *ngFor="let items of goodList">
            {{items}}
          </li>
        </ul>
      </div>
    <span>
    <span>
      <h2>bad list</h2>
      <button (click)="toggleBadList()">{{ showBadList ? 'Hide List' : 'Show List'}}</button>
      <div *ngIf="showBadList">
        <ul>
          <li *ngFor="let badItems of badList">
            {{badItems}}
          </li>
        </ul>
      </div>
    <span>
    `,
  styles: [`
    h2 {
      font-family: 'Raleway', 'san-serif';
    }
    span {
      display: inline;
    }
    `]
})
export class ListComponent  {
  goodList: string[];
  badList: string[];
  showGoodList: boolean;
  showBadList: boolean;

  constructor(){
    this.goodList = ['straberries', 'kiwis', 'rain'];
    this.badList = ['fog', 'kumquats', 'commercials'];
    this.showGoodList = false;
    this.showBadList = false;
  }

  toggleGoodList(){
    if (this.showGoodList === true) {
      this.showGoodList = false
    }
    else {
      this.showGoodList = true
    }
  }

  toggleBadList(){
    if (this.showBadList === true) {
      this.showBadList = false
    }
    else {
      this.showBadList = true
    }
  }
}
