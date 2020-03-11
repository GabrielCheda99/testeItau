import { Expenses } from 'src/app/models/expenses';

export function generatePdfBody(expenses: Expenses[], expenseList: any[], datePeriod) {
  expenses.filter(item => filterExpenseByDate(item, datePeriod)).forEach(expense => populateColums(expenseList, expense))
}
export function generatePdfHeaders(expenseList) {
  return expenseList.push([
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
}

function filterExpenseByDate(item, datePeriod) {

  let initialDate = new Date(datePeriod.dataInicial)
  let finalDate = new Date(datePeriod.dataFinal)
  let expenseDate = new Date(item.operationDate)

  if (initialDate <= expenseDate && finalDate >= expenseDate) {
    return item
  }

}

function populateColums(expenseList, expense) {

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
}