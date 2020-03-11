import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Expenses } from 'src/app/models/expenses';
const url = "http://localhost:3000/Expenses";

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private http: HttpClient) { }

  searchAll = () => this.http.get<Expenses[]>(url);

  registerExpense = (body) => this.http.post<Expenses>(url, body);

  search = (query: string) => {
    if (query != "") query = query.toLowerCase()
    return this.searchAll().pipe(map(data => data.filter(expense => expense.place.includes(query))));
  }





}