import React, { useState } from 'react';
import CreateBill from './components/CreateBill.jsx';
import Form from './components/form/Form.jsx';
import Bill from './components/bill/Bill.jsx';

export default function App() {
  //  store "Items", "people" state here- FROM INSTRUCTION.
  const [items, setItems] = useState('');
  const [person, setPerson] = useState(' ');

  const [itemPrice, setItemPrice] = useState('');

  // *** store the input bill name in a state *** //
  const [billName, setBillName] = useState(' ');
  // **** Change the style state of the create bill **** //
  const [currStyle, setCurrStyle] = useState('showCreateBill');
  console.log(billName);
  console.log(currStyle);
  // ====Data state I have ===
  // 1. bill Name.
  // 2. item name
  // 3. item price
  // 4. person
  return (
    <div>
      <h1 className="mb-5">Hot pot bill splitter</h1>
      {/* first page element */}
      <CreateBill
        billName={billName}
        setBillName={setBillName}
        className={currStyle}
        setCurrStyle={setCurrStyle}
      />
      {/* main page (second screen) element */}
      {/* <Form /> */}
      <Form
        items={items}
        setItems={setItems}
        itemPrice={itemPrice}
        setItemPrice={setItemPrice}
        person={person}
        setPerson={setPerson}
      />
      {console.log(`updated items: ${items}. updated item price : ${itemPrice}. person: ${person}`)}
      <Bill />
    </div>
  );
}
