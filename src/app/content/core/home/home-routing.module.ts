import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from 'src/app/guard/guard';
import { RegiterDebitCreditComponent } from '../components/regiter-debit-credit/regiter-debit-credit.component';


const routes: Routes = [
  {
    component: HomeComponent,
    canActivate: [AuthGuard],
    path: 'home',
    pathMatch: 'full'
  },
  {
    path: 'registerExpense',
    component: RegiterDebitCreditComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  { path: '**', redirectTo: "/login" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
