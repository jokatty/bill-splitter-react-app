import React from 'react';

export default function Item(props) {
  const items = props.itemDetails;
  const people = props.person;
  console.log(items);

  function displayItems() {
    return items.map((item) => (
      <div className="row">

        <div className="col-4">
          <p>{item.itemName}</p>
        </div>
        <div className="col-2">
          <p>
            $
            {item.itemPrice}
          </p>
        </div>
        {displayPeople()}
      </div>

    ));
  }

  function displayPeople() {
    return (
      // <div className="row mt-3">
      <>
        <div className="col-4">
          <select className="form-control" id="select-person">
            <option selected="null">Select...</option>
            { people.map((entry) => <option>{entry}</option>)}
          </select>
        </div>
        <div className="col-2">
          <button type="button" className=" btn btn-success"> + </button>
        </div>
        {/* </div> */}
      </>

    );
  }
  return (
    <>
      <div className="bill-itemlist-item">
        <div className="row">
          <div className="col-4">
            <p><h5>Item Name</h5></p>
          </div>
          <div className="col-2">
            <p><h5>Price</h5></p>
          </div>
          <div className="col-4">
            <p>Select Friend</p>
          </div>
        </div>
        {displayItems()}
        {/* {displayPeople()} */}

      </div>
      <button type="button" className="btn btn-success mt-5">Person List</button>
    </>
  );
}
