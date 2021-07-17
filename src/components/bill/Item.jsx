import React from 'react';

export default function Item() {
  return (
    <>
      <div className="bill-itemlist-item">
        <div className="form-group">
          <div className="row">
            <div className="col-8">
              <label htmlFor="item-name">Item Name</label>
              <input type="text" className="form-control input-sm" id="item-name" />
            </div>
            <div className="col-4">
              <label htmlFor="price">Price</label>
              <input type="number" className="form-control input-md" id="price" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-8">
              <label htmlFor="select-person">Select Friend</label>
              <select className="form-control" id="select-person">
                <option>Kai</option>
                <option>Sam</option>
                <option>Porter</option>
                <option>YQ</option>
                <option>Effe</option>
              </select>
            </div>
            <div className="col">
              <button type="button" className="mt-4 btn btn-success"> + Add Friend</button>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="btn btn-success mt-5">Person List</button>
    </>
  );
}
