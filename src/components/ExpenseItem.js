import './ExpenseItem.css'

function ExpenseItem(props) {
  const shortMonthName = (date) => new Intl.DateTimeFormat('en-US', {month: 'short'}).format(date)
  const date = new Date(props.date)
  const dateFormatted = `${shortMonthName(date)}, ${date.getDate()} ${date.getFullYear()}`

  return (
    <div className='expense-item'>
      <div>{ dateFormatted }</div>
      <div className='expense-item__description'>
        <h2>{ props.title }</h2>
        <div className='expense-item__price'>${ props.amount }</div>
      </div>
    </div>
  )
}

export default ExpenseItem
