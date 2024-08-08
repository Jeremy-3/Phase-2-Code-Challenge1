import React, { useState } from 'react';

function Navbar({ transactions, setTransactions }) {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted');

    const newTransaction = {
      date: formData.date,
      description: formData.description,
      category: formData.category,
      amount: parseFloat(formData.amount),
    };

    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
    .then((res) => res.json())
    .then((data) => {
      setTransactions([...transactions, data]); // Update transactions list
      setFormData({
        date: '',
        description: '',
        category: '',
        amount: '',
      });
    })
    .catch((error) => {
      console.error('Error adding transaction:', error);
    });
  };

  return (
    <>
    <h1 className='header'>Transaction Page</h1>
    <form onSubmit={handleSubmit} className="flex justify-evenly border border-gray-300 h-16 bg-slate-600 p-2 mb-4 rounded-lg shadow-sm">
    <input
      type='date'
      name='date'
      value={formData.date}
      onChange={handleChange}
      className='p-1 rounded-md border border-gray-400'
      required
    />
    <input
      type='text'
      name='description'
      value={formData.description}
      onChange={handleChange}
      placeholder='Description'
      className='p-1 rounded-md border border-gray-400'
      required
    />
    <input
      type='text'
      name='category'
      value={formData.category}
      onChange={handleChange}
      placeholder='Category'
      className='p-1 rounded-md border border-gray-400'
      required
    />
    <input
      type='number'
      name='amount'
      value={formData.amount}
      onChange={handleChange}
      placeholder='Amount'
      className='p-1 rounded-md border border-gray-400'
      required
    />
    <button
      type="submit"
      className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
    >
      ADD
    </button>
  </form>
  </>
  );
}

export default Navbar;
