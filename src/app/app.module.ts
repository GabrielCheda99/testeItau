import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './content/core/home/home.module';
import { LayoutModule } from './content/layout/layout.module';
import { CoreModule } from './content/core/core.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    CoreModule,
    HomeModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
