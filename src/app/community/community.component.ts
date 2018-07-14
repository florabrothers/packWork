import { Component, OnInit, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  @ViewChild('wizardlg') wizardLarge: ClrWizard;

  lgOpen: boolean = false;


  constructor() { }

  ngOnInit() {
  }

}
