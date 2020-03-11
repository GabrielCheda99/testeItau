import { Expenses } from 'src/app/models/expenses';

export function generatePdfBody(expenses: Expenses[], expenseList: any[], datePeriod) {

  // expenses.filter(e => e.operationDate)

  expenses.forEach(expense => {
    expenseList.push([{
      columns: [
        {
          text: expense.place,
          margin: [0, 10, 0, 10]
        },
        {
          text: expense.operationType,
          margin: [10, 10, 0, 10]
        },
        {
          text: expense.value,
          margin: [10, 10, 0, 10]
        },
        {
          text: expense.description,
          margin: [0, 10, 0, 10]
        },
        {
          text: expense.operationDate,
          margin: [0, 10, 0, 10]
        }
      ]
    }]);
  });



}
export function generatePdfHeaders(expenseList) {
  expenseList.push([
    {
      columns: [
        {
          text: "Estabelecimento",
          bold: true,
          fontSize: 12,
          margin: [0, 10, 0, 10]
        },
        {
          text: "Tipo Operação",
          bold: true,
          fontSize: 12,
          margin: [10, 10, 0, 10]
        },
        {
          text: "Valor",
          bold: true,
          fontSize: 12,
          margin: [10, 10, 0, 10]
        },
        {
          text: "Descrição",
          bold: true,
          fontSize: 12,
          margin: [0, 10, 0, 10]
        },
        {
          text: "Data da Operação",
          bold: true,
          fontSize: 12,
          margin: [0, 10, 0, 10]
        }
      ]
    }
  ]);
  return expenseList;
}
