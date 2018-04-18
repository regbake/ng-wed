import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('valueToPass')
  count: number = 0;

  increment() {
    this.valueToPass++;
  }

  decrement() {
    this.valueToPass--;
  }

}
