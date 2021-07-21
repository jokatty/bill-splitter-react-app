import React from 'react';
import Item from './Item.jsx';

export default function ItemList(props) {
  return (
    <div className="bill-item">
      <Item itemDetails={props.itemDetails} person={props.person} />
    </div>
  );
}
