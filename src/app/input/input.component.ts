import { Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  content: any;

  equation = '\\sum_{i=1}^nx_i';

  public options: Object = {
    toolbarButtons: ['bold', 'italic', 'underline', 'paragraphFormat', '|', 'undo', 'redo', '|', 'math'],
    // toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
    // toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
    // toolbarButtonsMD: ['bold', 'italic', 'underline', 'paragraphFormat', 'alert'],
    placeholderText: 'Edit Your Content Here!',
    charCounterCount: false
  };

  constructor() {}

  ngOnInit() {
    $.FroalaEditor.DefineIcon('math', { NAME: '∫', template: 'text' });
    $.FroalaEditor.RegisterCommand('math', {
      title: 'Math',
      focus: false,
      undo: false,
      refreshAfterCallback: false,

      callback: function () {
        this.html.set(`omg`);
      }
    });
  }

}
