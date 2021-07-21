import React, { useState } from 'react';

export default function ItemForm(props) {
  const { setItemNPrice } = props;

  const [item, setItem] = useState({
    itemName: '',
    itemPrice: '',
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setItem((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  return (
    <div className="form-item">
      <div className="input-group mb-3 mt-5">
        <input
          value={item.itemName}
          type="text"
          className="form-control"
          placeholder="Enter item"
          onChange={handleChange}
          name="itemName"

        />
        <input
          name="itemPrice"
          type="number"
          className="form-control"
          placeholder="$ Price input"
          value={item.itemPrice}
          onChange={handleChange}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              setItemNPrice((prevValue) => [
                ...prevValue,
                item,
              ]);
              setItem({
                itemName: '',
                itemPrice: '',
              });
            }}
          >
            Submit
          </button>
        </div>
      </div>

    </div>
  );
}
