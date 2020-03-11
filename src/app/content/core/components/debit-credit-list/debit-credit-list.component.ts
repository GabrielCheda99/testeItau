import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Expenses } from 'src/app/models/expenses';
import { ExpensesService } from 'src/app/services/search/Expenses.service';

@Component({
  selector: 'app-debit-credit-list',
  templateUrl: './debit-credit-list.component.html',
  styleUrls: ['./debit-credit-list.component.css']
})
export class DebitCreditListComponent {

  @Input() filtered: string;


  searchListResult: Expenses[];
  query: string;
  loading: boolean = false;

  public paginaAtual = 1;

  constructor(private searchService: ExpensesService) {
    this.searchService.searchAll()
      .subscribe(data => {
        console.log(data)
        this.searchListResult = data
        this.loading = false;
      });
  }
}
