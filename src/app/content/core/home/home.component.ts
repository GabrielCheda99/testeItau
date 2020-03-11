import { Component, OnInit, Input, Output } from '@angular/core';
import { Expenses } from 'src/app/models/expenses';
import { Router } from '@angular/router';
import { PdfService } from 'src/app/services/pdf/pdf.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  filter: string;
  fullSearchList: Expenses[];

  constructor(private router: Router) { }

  redirectToRegistration = () => this.router.navigateByUrl('/registerExpense');
}
