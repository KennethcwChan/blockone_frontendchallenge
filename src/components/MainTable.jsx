import React, { useState } from 'react';

import GenTablePage from './GenerateTable';
import FetchData from './FetchAPIData';

import archivedData from '../archivedData';
import isValidDate from './ErrorHandler/DateValidation';
import isValidAction from './ErrorHandler/ActionValidation';
import isValidCurrency from './ErrorHandler/CurrencyValidation';
import isValidAmount from './ErrorHandler/AmountValidation';
import isValidDescription from './ErrorHandler/DescriptionValidation';

/*
First and foremost, I would like to apologize for not being able to properly setup the API.
Unfortunately the data that is being used is stored in a file named archivedData.js
*/

const MainTablePage = (props) => {
  //const APIData = FetchData();
  //useState hooks
  const [mainTable, setMainTable] = useState(archivedData);
  const [timestamp, setTimestamp] = useState('');
  const [action, setAction] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const addEntry = {
    id: mainTable.length + 1,
    timestamp: timestamp,
    action: action,
    description: description,
    amount: amount,
    currency: currency,
  };

  //validation
  const timeStampValidation = addEntry.timestamp;
  const actionValidation = addEntry.action;
  const descriptionValidation = addEntry.description;
  const amountValidation = addEntry.amount;
  const currencyValidation = addEntry.currency;

  const checkDate = isValidDate(addEntry, timeStampValidation);
  const checkAction = isValidAction(addEntry, actionValidation);
  const checkDescription = isValidDescription(addEntry, descriptionValidation);
  const checkAmount = isValidAmount(addEntry, amountValidation);
  const checkCurrency = isValidCurrency(addEntry, currencyValidation);

  function setReset(set) {
    //hook - set the table with new entry
    setMainTable(set);
    setTimestamp('');
    setAction('');
    setDescription('');
    setAmount('');
    setCurrency('');
  }

  function handleFormSubmit(event) {
    if (
      checkDate &&
      checkAction &&
      checkDescription &&
      checkAmount &&
      checkCurrency
    ) {
      //append entry to the bottom of list
      const newSet = [...mainTable, addEntry];
      //sort dates
      const sortedSet = newSet
        .slice()
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      setReset(sortedSet);
    } else {
      alert('Please try again');
      console.log('Please try again');
    }
    event.preventDefault();
  }

  const loadEntries = () => {
    return (
      <div>
        <form className="formContainer tableFadein" onSubmit={handleFormSubmit}>
          <input
            name="timestamp"
            type="timestamp"
            placeholder="Timestamp..."
            id="timestamp"
            value={timestamp}
            onInput={(e) => setTimestamp(e.target.value)}
          />
          <input
            name="action"
            type="action"
            placeholder="Action..."
            id="action"
            value={action}
            onInput={(e) => setAction(e.target.value)}
          />
          <input
            name="description"
            type="description"
            placeholder="Description..."
            id="description"
            value={description}
            onInput={(e) => setDescription(e.target.value)}
          />
          <input
            name="amount"
            type="amount"
            placeholder="Amount..."
            id="amount"
            value={amount}
            onInput={(e) => setAmount(e.target.value)}
          />
          <input
            name="currency"
            type="currency"
            placeholder="Currency..."
            id="currency"
            value={currency}
            onInput={(e) => setCurrency(e.target.value)}
          />
          <button className="btn btn-danger" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  };

  return (
    <div>
      <section id="add">{loadEntries()}</section>
      <section id="main">
        <GenTablePage entries={mainTable} />
      </section>
    </div>
  );
};
export default MainTablePage;
