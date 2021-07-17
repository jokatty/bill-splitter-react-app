import React from 'react';

export default function PersonForm() {
  return (
    <div className="form-person">
      <div className="input-group mb-3 mt-2">
        <input type="text" className="form-control" placeholder="Enter person name" />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">Submit</button>
        </div>
      </div>
    </div>
  );
}
