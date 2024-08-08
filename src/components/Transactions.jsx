import { useEffect, useState } from "react";
import OneTrans from "./OneTrans";

function Transactions() {
  const [transactions, setTransactions] = useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/transactions')
    .then(res => res.json())
    .then( data => setTransactions(data))
    .catch(error => console.log("Error:", error));
  },[])

  const deleteTransaction=(id) =>  {
    fetch(`http://localhost:3000/transactions/${id}`,{
      method:'DELETE',

    })
    .then(response => {
      if (response.ok) {
        setTransactions(transactions.filter(transaction => transaction.id !== id));
      } else {
        console.log('Error deleting transaction:');
      }
    })
    .catch(error => console.log("Error:", error));
  }
  console.log(transactions);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <ul>
        {transactions.map((transaction) => (
          <OneTrans key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
