import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import Transactions from './components/Transactions'

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("https://bank-flatiron-backend.vercel.app/transactions")
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
  
  <Navbar transactions={transactions} setTransactions={setTransactions} />
    <Transactions transactions={transactions} />
    </>
  )
}

export default App
