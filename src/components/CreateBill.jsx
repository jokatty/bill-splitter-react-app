import React, { useState } from 'react';

// Create element for Create Bill
export default function CreateBill(props) {
  const {
    billName, setBillName, currStyle, setCurrStyle,
  } = props;

  return (
    <>
      <h2> Create Bill</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="input bill name"
          onChange={(event) => {
            setBillName(event.target.value);
          }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              setCurrStyle('hideCreateBill');
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
