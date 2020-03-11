import { Pipe, PipeTransform } from '@angular/core';
import { Expenses } from 'src/app/models/expenses';

@Pipe({
  name: 'expensesFilter'
})
export class ExpensesFilterPipe implements PipeTransform {

  transform(Expenses: Expenses[], value: string) {
    if (value != undefined) {
      value = value.toLowerCase();
      return Expenses.filter(expense => expense.place.toLowerCase().includes(value));
    }
    return Expenses;
  }
}
