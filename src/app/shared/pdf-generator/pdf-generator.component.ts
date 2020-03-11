import { Component, Input } from '@angular/core';

import { PdfService } from 'src/app/services/pdf/pdf.service';
import { Expenses } from 'src/app/models/expenses';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.css']
})
export class PdfGeneratorComponent {

  @Input() fullSearchList: Expenses[];

  constructor(private pdfService: PdfService) { }

  openPdf = (form: NgForm) => this.pdfService.generatePdf(this.fullSearchList, { dataInicial: form.value.InitialDate, dataFinal: form.value.FinalDate });

}
