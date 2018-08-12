import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  // form method
  // form = new FormGroup({
  //   formModel: new FormControl('Hello World', Validators.minLength(2)),
  // });
  // get formModel(): any { return this.form.get('formModel'); }
  // onSubmit(): void {
  //   console.log(this.form.value);
  // }
  // setValue() { this.form.setValue({ formModel: 'Default text' }); }

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
