import './ExpenseDate.css'

function ExpenseDate(props) {
  const shortMonthName = (date) => new Intl.DateTimeFormat('en-US', {month: 'short'}).format(date)
  const date = new Date(props.date)
  const dateFormatted = `${shortMonthName(date)}, ${date.getDate()} ${date.getFullYear()}`

  return (
    <div className="expense-date__content">{ dateFormatted }</div>
  )
}

export default ExpenseDate
