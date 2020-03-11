import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormsModule } from '@angular/forms';
import { ExpensesFilterPipe } from './expensesFIilterPipe/expenses-filter.pipe';
import { PdfGeneratorComponent } from './pdf-generator/pdf-generator.component';



@NgModule({
  declarations: [SpinnerComponent, ExpensesFilterPipe, PdfGeneratorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SpinnerComponent, ExpensesFilterPipe, PdfGeneratorComponent]
})
export class SharedModule { }
