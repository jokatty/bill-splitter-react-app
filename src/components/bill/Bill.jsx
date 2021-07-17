import React, { useState } from 'react';
import ItemList from './ItemList.jsx';
import PersonList from './PersonList.jsx';

export default function Bill() {
  //  store "total bill" state here
  const [totalBill, setTotalBill] = useState(0);
  return (
    <div className="bill">
      <h3>Item List</h3>
      <ItemList />
      <PersonList />

      <h5 className="total-bill">Total Bill</h5>

      <button type="button" className="btn btn-success mb-5">Save Bill</button>
    </div>
  );
}
