import React from 'react';
import ItemForm from './ItemForm.jsx';
import PersonForm from './PersonForm.jsx';

export default function Form(props) {
  const {
    setItemNPrice, setPerson,
  } = props;
  //  Form has two components: ItemForm and PersonForm.
  return (
    <div className="form">
      <ItemForm
        setItemNPrice={setItemNPrice}
      />
      <PersonForm setPerson={setPerson} />
    </div>
  );
}
