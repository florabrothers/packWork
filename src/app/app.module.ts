import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WorkbenchComponent } from './workbench/workbench.component';
import { CommunityComponent } from './community/community.component';

import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WorkbenchComponent,
    CommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
