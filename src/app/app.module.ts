import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KatexModule } from 'ng-katex';
import {
  MdcButtonModule,
  MdcIconModule,
  MdcCardModule,
  MdcIconButtonModule,
  MdcIconToggleModule,
  MdcRippleModule,
  MdcTextFieldModule,
  MdcListModule,
  MdcThemeModule,
  MdcTypographyModule
} from '@angular-mdc/web';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkbenchComponent } from './workbench/workbench.component';
import { CommunityComponent } from './community/community.component';

import { AppRoutes } from './app.routes';
import { ProblemComponent } from './workbench/problems/problem/problem.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetsComponent } from './workbench/sets/sets.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkbenchComponent,
    CommunityComponent,
    ProblemComponent,
    SetsComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    KatexModule,
    MdcCardModule,
    MdcButtonModule,
    MdcIconModule,
    MdcIconButtonModule,
    MdcIconToggleModule,
    MdcRippleModule,
    MdcTextFieldModule,
    MdcListModule,
    MdcThemeModule,
    MdcTypographyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
