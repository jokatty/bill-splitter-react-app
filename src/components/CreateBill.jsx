import React, { useState } from 'react';

// Create element for Create Bill
export default function CreateBill(props) {
  const [name, setName] = useState('');

  return (
    <>
      <h2> Create Bill</h2>
      <div className="input-group mb-3">
        <input
          value={name}
          type="text"
          className="form-control"
          placeholder="input bill name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              props.setBillName(name);
              setName('');
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
