import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ClrWizard, ClrStackBlock } from '@clr/angular';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)', opacity: 1}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class CommunityComponent implements OnInit {
  @ViewChild('wizardmd') wizardmedium: ClrWizard;
  @ViewChild('firstBlock') firstBlock: ClrStackBlock;
  @ViewChild('secondBlock') secondBlock: ClrStackBlock;

  open: boolean = true;

  public model = {
    content1: "old1",
    content2: "old2"
  }

  modelNew = {
    content1: "",
    content2: ""
  }

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  openFirst() {
    if (this.firstBlock.expanded === true) {
      this.firstBlock.expanded = false;
    } else {
      this.firstBlock.expanded = true;
      this.secondBlock.expanded = false;
      this.el.nativeElement.querySelector('.first-input').focus();
    }
  }
  openSecond() {
    if (this.secondBlock.expanded === true) {
      this.secondBlock.expanded = false;
    } else {
      this.secondBlock.expanded = true;
      this.firstBlock.expanded = false;
      this.el.nativeElement.querySelector('.second-input').focus();

    }

  }

}
