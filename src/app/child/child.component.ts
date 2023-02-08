import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() data: string;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
