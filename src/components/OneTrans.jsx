import React from "react";
import Buttons from "./Button";

function OneTrans({ transaction ,deleteTransaction}) {
  
  return (
    (
      <li className="border border-gray-300 rounded-lg p-4 mb-4 bg-white shadow">
        <p className="text-gray-700">Date: {transaction.date}</p>
        <p className="text-gray-700">Description: {transaction.description}</p>
        <p  className="text-gray-700">Category: {transaction.category}</p>
        <p className="text-gray-700">Amount: ${transaction.amount}</p>
         <Buttons onClick={()=> deleteTransaction(transaction.id)}>Delete</Buttons>
      </li>
    )
  )
}

export default OneTrans;
