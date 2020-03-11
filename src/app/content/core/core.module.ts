import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './auth/login/login.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [LoginComponent, CoreComponent],
  imports: [CommonModule, FormsModule, CoreRoutingModule, BrowserAnimationsModule, BrowserModule, SharedModule, LayoutModule],
})

export class CoreModule { }