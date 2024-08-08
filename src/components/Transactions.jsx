import OneTrans from "./OneTrans";

function Transactions({transactions}) {
  console.log(transactions);
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
