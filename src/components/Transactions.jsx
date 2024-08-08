import { useEffect, useState } from "react";
import OneTrans from './OneTrans'

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((transactions) => setTransactions(transactions))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <ul>
        {transactions.map((transaction) => (
          <OneTrans key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
