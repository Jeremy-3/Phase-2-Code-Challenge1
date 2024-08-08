import { useEffect, useState } from "react";
import OneTrans from "./OneTrans";

function Transactions() {
  const [transactions, setTransactions] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
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
const filteredTransactions = transactions.filter(transaction => transaction.description.toLowerCase().includes(searchQuery.toLowerCase())
)

const handleSearchChange = (event) => {
  setSearchQuery(event.target.value);
};
  console.log(transactions);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      <div>
        <input 
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search by Description..."
        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-transparent"
        />
      </div>
      <ul>
        {filteredTransactions.map((transaction)=> <OneTrans key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>)}
      </ul>
      <ul>
        {transactions.map((transaction) => (
          <OneTrans key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
