import React from 'react';

export default function PersonForm(props) {
  const { person, setPerson } = props;
  return (
    <div className="form-person">
      <div className="input-group mb-3 mt-2">
        <input
          value={person}
          type="text"
          className="form-control"
          placeholder="Enter person name"
          onChange={(event) => {
            setPerson(event.target.value);
          }}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Submit</button>
        </div>
      </div>
    </div>
  );
}
