import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ExpensesService } from 'src/app/services/search/Expenses.service';
import { Expenses } from 'src/app/models/expenses';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regiter-debit-credit',
  templateUrl: './regiter-debit-credit.component.html',
  styleUrls: ['./regiter-debit-credit.component.css']
})
export class RegiterDebitCreditComponent {

  constructor(private expenseService: ExpensesService, private router: Router) { }


  onSubmit(form: NgForm) {
    if (form.valid) {
      var formFields: Expenses = form.value;
      console.log(formFields)
      return this.expenseService.registerExpense(formFields).subscribe(data => this.router.navigateByUrl("/home"));
    }
  }
} 
