import ExpenseItem from './ExpenseItem';

function ExpenseItems(props) {

  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 26) },
    { id: 'e2', title: 'New denim skirt', amount: 29.70, date: new Date(2021, 2, 27) },
    { id: 'e3', title: 'Milk', amount: 4.17, date: new Date(2021, 2, 28) },
    { id: 'e4', title: 'New shoes', amount: 84.80, date: new Date(2021, 2, 29) }
  ]

  return (
    expenses.map(item => (
      <ExpenseItem key={ item.id } title={ item.title } amount={ item.amount } date={ item.date }/>
    ))
  )
}

export default ExpenseItems
