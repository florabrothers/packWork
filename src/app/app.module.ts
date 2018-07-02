import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkbenchComponent } from './workbench/workbench.component';
import { CommunityComponent } from './community/community.component';

import { AppRoutes } from './app.routes';
import { ProblemComponent } from './workbench/problems/problem/problem.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkbenchComponent,
    CommunityComponent,
    ProblemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
