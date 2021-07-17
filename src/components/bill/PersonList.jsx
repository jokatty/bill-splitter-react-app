import React from 'react';

export default function PersonList() {
  return (
    <div className="bill-person">
      <h3>Amount Owed</h3>
      <h4 className="owed-by">Person List</h4>
      <div className="row mt-4">
        <div className="col-8">
          <p>Name</p>
        </div>
        <div className="col-4">
          <h6>$value</h6>
        </div>
      </div>
    </div>
  );
}
