import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  equation: string = '\\sum_{i=1}^nx_i';

  constructor() { }

  ngOnInit() {
  }

}
