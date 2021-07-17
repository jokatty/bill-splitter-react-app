import React from 'react';
import ItemForm from './ItemForm.jsx';
import PersonForm from './PersonForm.jsx';

export default function Form(props) {
  const {
    items, setItems, itemPrice, setItemPrice,
  } = props;
  //  Form has two components: ItemForm and PersonForm for.
  //  save state of ItemForm and Person here (parent element)
  return (
    <div className="form">
      <ItemForm
        items={items}
        setItems={setItems}
        itemPrice={itemPrice}
        setItemPrice={setItemPrice}
      />
      {/* <ItemForm /> */}
      <PersonForm />
    </div>
  );
}
