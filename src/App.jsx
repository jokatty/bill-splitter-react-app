import React, { useState } from 'react';
import CreateBill from './components/CreateBill.jsx';
import Form from './components/form/Form.jsx';
import Bill from './components/bill/Bill.jsx';

export default function App() {
  //  store "Items", "people" state here- FROM INSTRUCTION.
  // const [items, setItems] = useState('');
  // const [person, setPerson] = useState(' ');
  const [person, setPerson] = useState([]);
  const [itemNPrice, setItemNPrice] = useState([]);
  // const [itemPrice, setItemPrice] = useState('');

  // *** store the input bill name in a state *** //
  const [billName, setBillName] = useState('');
  console.log(billName);
  console.log(itemNPrice);
  console.log(person);

  // ====Data state I have ===
  // 1. bill Name. (TODO: STORE IN DB)
  // 2. Array of item name & item price Object.
  // 3. array of people

  return (
    <div>
      <h1 className="mb-5">Hot pot bill splitter</h1>
      {/* first page element */}
      {billName === '' ? (
        <CreateBill
          setBillName={setBillName}
        />
      ) : null}
      {/* main page (second screen) element */}
      <Form
        setItemNPrice={setItemNPrice}
        setPerson={setPerson}
      />
      <Bill itemDetails={itemNPrice} person={person} />
    </div>
  );
}
