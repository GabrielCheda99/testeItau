import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Expenses } from 'src/app/models/expenses';
import { ExpensesService } from 'src/app/services/search/Expenses.service';
import { PdfService } from 'src/app/services/pdf/pdf.service';
@Component({
  selector: 'app-debit-credit-list',
  templateUrl: './debit-credit-list.component.html',
  styleUrls: ['./debit-credit-list.component.css']
})
export class DebitCreditListComponent {

  @Input() filtered: string;
  @Output() fullSearchList: EventEmitter<Expenses[]> = new EventEmitter<Expenses[]>();

  searchListResult: Expenses[] = [];
  loading: boolean = false;

  firstPage: number = 1;

  reverse: boolean = false;
  key: string = 'place';

  totalItems: number;

  constructor(private searchService: ExpensesService) {
    this.searchService.searchAll()
      .subscribe(data => {
        this.totalItems = data.length
        this.searchListResult = data
        this.loading = false;
        this.fullSearchList.emit(this.searchListResult)
      });
  }


  sort(key) {
    console.log(key)
    this.key = key;
    this.reverse = !this.reverse;
  }
}
