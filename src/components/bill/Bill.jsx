import React, { useState } from 'react';
import ItemList from './ItemList.jsx';
import PersonList from './PersonList.jsx';

export default function Bill(props) {
  //  store "total bill" state here
  const { itemDetails, person } = props;
  const [totalBill, setTotalBill] = useState(0);
  // store the people and their bill split here
  //  record amount owed by each person
  const [billOwed, setBillOwed] = useState([]);
  return (
    <div className="bill">
      <h3>Item List</h3>
      <ItemList itemDetails={itemDetails} person={person} setTotalBill={setTotalBill} setBillOwed={setBillOwed} />
      <PersonList billOwed={billOwed} />

      <h5 className="total-bill">
        Total Bill: $
        {totalBill}
      </h5>

      <button type="button" className="btn btn-success mb-5">Save Bill</button>
    </div>
  );
}
