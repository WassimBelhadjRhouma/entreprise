import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent, SignupComponent } from '.';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const COMPONENTS = [
  AuthComponent,
  LoginComponent,
  SignupComponent
];
const MODULES = [
  CommonModule,
  AuthRoutingModule,
  FormsModule,
  ReactiveFormsModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    ...MODULES
  ]
})
export class AuthModule { }
