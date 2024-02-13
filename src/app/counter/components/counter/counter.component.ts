
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `<h3>Conunter {{counter}}</h3>

  <button (click)="IncreaseBy(+1)">+1</button>
  <button (click)="resetCounter()">reset</button>
  <button (click)="IncreaseBy(-1)">-1</button>
  `
})

export class CounterComponent  {

  constructor() { }
  public counter = 10;
  public IncreaseBy(num:number):void{
    this.counter+=num;
   }
  public resetCounter():void{
    this.counter=10;
   }

}
