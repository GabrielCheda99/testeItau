import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from '../../layout/layout.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

import { SearchBarComponent } from '../components/search-bar/search-bar.component';
import { HomeComponent } from './home.component';
import { DebitCreditListComponent } from '../components/debit-credit-list/debit-credit-list.component';
import { RegiterDebitCreditComponent } from '../components/regiter-debit-credit/regiter-debit-credit.component';

const exportableComponents = [
  SearchBarComponent,
  HomeComponent,
  DebitCreditListComponent,
  RegiterDebitCreditComponent
];

@NgModule({
  declarations: [exportableComponents],
  imports: [CommonModule, FormsModule, HomeRoutingModule, BrowserAnimationsModule, BrowserModule, LayoutModule, SharedModule, NgxPaginationModule, OrderModule ],
  exports: [exportableComponents]
})

export class HomeModule { }
