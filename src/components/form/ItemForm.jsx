import React from 'react';

export default function ItemForm(props) {
  const {
    items, setItems, itemPrice, setItemPrice,
  } = props;
  // console.log('items in item form: ', items);
  return (
    <div className="form-item">
      <div className="input-group mb-3 mt-5">
        <input
          value={items}
          type="text"
          className="form-control"
          placeholder="Enter item"
          onChange={(event) => {
            setItems(event.target.value);
          }}

        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Submit</button>
        </div>
      </div>
      <input
        type="number"
        className="form-control"
        placeholder="$ Price input"
        value={itemPrice}
        onChange={(event) => {
          setItemPrice(event.target.value);
        }}
      />
    </div>
  );
}
