import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 26) },
    { id: 'e2', title: 'New denim skirt', amount: 29.70, date: new Date(2021, 2, 27) },
    { id: 'e3', title: 'Milk', amount: 4.17, date: new Date(2021, 2, 28) },
    { id: 'e4', title: 'New shoes', amount: 84.80, date: new Date(2021, 2, 29) }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h2>Let's get started!</h2>
        <ExpenseItem title='testing Dan code' amount='112' date='12/08/1994'/>
      </header>
    </div>
  );
}

export default App;
