import { Injectable } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { Expenses } from 'src/app/models/expenses';
import { generatePdfHeaders, generatePdfBody } from './generatePdfHelpers';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }



  generatePdf(expenses: Expenses[], datePeriod) {

    const expenseList = [];

    generatePdfHeaders(expenseList);
    generatePdfBody(expenses, expenseList, datePeriod);

    let documentDefinition = {
      content: [
        {
          table: {
            headerRows: 1,
            body: [...expenseList]
          }
        }
      ]
    };
    return pdfMake.createPdf(documentDefinition).open();
  }
}

