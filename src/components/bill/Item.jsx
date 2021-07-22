import React, { useState } from 'react';

export default function Item(props) {
  const items = props.itemDetails;
  const people = props.person;
  console.log(items);
  //  save the state of the selected people
  const [checkedPeople, setCheckedPeople] = useState([]);
  //  keep track of the total bill and amount owed by each person
  const { setTotalBill, setBillOwed } = props;

  function handleClick(event) {
    const { value } = event.target;
    return setCheckedPeople((prevValue) => [
      ...prevValue, value,
    ]);
  }

  function splitBill(item) {
    const { itemPrice } = item;
    setTotalBill((prevValue) => Number(prevValue) + Number(itemPrice));
    const owedByEach = itemPrice / checkedPeople.length;
    for (let i = 0; i < checkedPeople.length; i += 1) {
      setBillOwed((prevValue) => (
        [
          ...prevValue,
          {
            owedBy: checkedPeople[i],
            amount: owedByEach,
          },

        ]
      ));
      //  CODE TO FILTER EXISTING OBJ

      // for (let j = 0; j < prevValue.length; j += 1) {
      //   if (prevValue[j].owedBy === checkedPeople[j]) {
      //     const newAmount = prevValue[j].amount + owedByEach;
      //     const filteredObj = [...prevValue].filter(
      //       prevValue !== prevValue[j],
      //     );
      //     return (
      //       [
      //         ...filteredObj,
      //         {
      //           owedBy: checkedPeople[i],
      //           amount: newAmount,
      //         },
      //       ]
      //     );
      //   }
      //   return (
      //     [
      //       ...prevValue,
      //       {
      //         owedBy: checkedPeople[i],
      //         amount: owedByEach,
      //       },

      //     ]
      //   );
      // }
    }
  }

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
        {displayPeople(item)}
      </div>

    ));
  }

  function displayPeople(itemDetails) {
    return (
      <>
        <div className="col-4">
          { people.map((entry) => (
            <>
              <input
                type="checkbox"
                id={entry}
                value={entry}
                onClick={(event) => (
                  handleClick(event)
                )}
              />
              <label htmlFor={entry}>{entry}</label>
              <br />
            </>
          ))}
        </div>

        <div className="col-2">
          <button
            type="button"
            className=" btn btn-success"
            onClick={() => {
              splitBill(itemDetails);
              setCheckedPeople([]);
            }}
          >
            +
          </button>
        </div>
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

      </div>
      <button type="button" className="btn btn-success mt-5">Person List</button>
    </>
  );
}
