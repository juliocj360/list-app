import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <span>
      <h2>good list</h2>
      <button (click)="toggleGoodList()">{{ showGoodList ? 'Hide List' : 'Show List'}}</button>
      <div *ngIf="showGoodList">
        <ul>
          <li *ngFor="let items of goodList; let i = index">
            {{items}} <button (click)="deleteGoodItem(i)">X</button>
          </li>
        </ul>
        <form (submit)="addGoodItem(goodItem.value)" (submit)="goodItem.value=''">
          <label>Add Good Item: </label>
          <input type="text" #goodItem />
        </form>
      </div>
    <span>
    <span>
      <h2>bad list</h2>
      <button (click)="toggleBadList()">{{ showBadList ? 'Hide List' : 'Show List'}}</button>
      <div *ngIf="showBadList">
        <ul>
          <li *ngFor="let badItems of badList; let i = index">
            {{badItems}} <button (click)="deleteBadItem(i)">X</button>
          </li>
        </ul>
        <form (submit)="addBadItem(badItem.value)" (submit)="badItem.value=''">
          <label>Add Bad Item: </label>
          <input type="text" #badItem />
        </form>
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

  addGoodItem(value){
    this.goodList.push(value)
  }

  addBadItem(value){
    this.badList.push(value)
  }

  deleteGoodItem(index){
    this.goodList.splice(index,1)
  }

  deleteBadItem(index){
    this.badList.splice(index,1)
  }
}
