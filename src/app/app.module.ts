import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

const MODULE = [
  BrowserModule,
  AppRoutingModule,
  NgbModule,
  BrowserAnimationsModule, // required animations module
  ToastrModule.forRoot(), // ToastrModule added
  CoreModule.forRoot(),

];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...MODULE,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
