import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  equation: string = '\\sum_{i=1}^nx_i';
  test: string = 'test';

  public options: Object = {
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false
  };

  constructor() {}

  ngOnInit() {
  }

}
