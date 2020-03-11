import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { ExpensesFilterPipe } from './expensesFIilterPipe/expenses-filter.pipe';



@NgModule({
  declarations: [SpinnerComponent, ExpensesFilterPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SpinnerComponent, ExpensesFilterPipe]
})
export class SharedModule { }
