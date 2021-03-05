import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent, AboutComponent, AcceuilComponent } from '.';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';

const MODULES = [
  CommonModule,
  PagesRoutingModule
];

const COMPONENTS = [
  PagesComponent,
  ContactComponent,
  AboutComponent,
  AcceuilComponent
];


@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...MODULES
  ]
})
export class PagesModule { }
