import React, { useState } from 'react';

export default function PersonForm(props) {
  const { person, setPerson } = props;
  const [name, setName] = useState('');
  return (
    <div className="form-person">
      <div className="input-group mb-3 mt-2">
        <input
          value={name}
          type="text"
          className="form-control"
          placeholder="Enter person name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              setPerson((prevValue) => [...prevValue, name]);
              setName('');
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
