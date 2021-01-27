import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GenTable from './GenerateTable';
import isValidDate from './ErrorHandler/DateValidation';
import isValidAction from './ErrorHandler/ActionValidation';
import isValidCurrency from './ErrorHandler/CurrencyValidation';
import isValidAmount from './ErrorHandler/AmountValidation';
import isValidDescription from './ErrorHandler/DescriptionValidation';

const MainTablePage = () => {
  //useState hooks
  const [mainTable, setMainTable] = useState([]);
  const [timestamp, setTimestamp] = useState('');
  const [action, setAction] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const addEntry = {
    id: `t${mainTable.length + 1}`,
    timestamp: timestamp,
    action: action,
    description: description,
    amount: amount,
    currency: currency,
  };

  //Accessing data from API
  useEffect(() => {
    const fetchURL =
      'http://my-json-server.typicode.com/alexradulescu/transactions-fake-api/transactions';
    const fetchData = async () => {
      const result = await axios(fetchURL);
      setMainTable(result.data);
    };
    fetchData();
  }, []);

  //Validation
  const timeStampValidation = addEntry.timestamp;
  const actionValidation = addEntry.action;
  const descriptionValidation = addEntry.description;
  const amountValidation = addEntry.amount;
  const currencyValidation = addEntry.currency;

  const dateFlag = isValidDate(addEntry, timeStampValidation);
  const actionFlag = isValidAction(addEntry, actionValidation);
  const descriptionFlag = isValidDescription(addEntry, descriptionValidation);
  const amountFlag = isValidAmount(addEntry, amountValidation);
  const currencyFlag = isValidCurrency(addEntry, currencyValidation);

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
      dateFlag &&
      actionFlag &&
      descriptionFlag &&
      amountFlag &&
      currencyFlag
    ) {
      //append entry to the bottom of list
      const newSet = [...mainTable, addEntry];
      //sort dates
      const sortedSet = newSet
        .slice()
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      setReset(sortedSet);
    } else {
      alert(
        `Please try again - \n Timestamp: (yyyy-mm-dd), \n Action: (credit/debit), \n Description: (min. 4 chars), \n Amount: (ints/floats), \n Currency: (SGD, HKD, USD)`
      );
      console.log('Please try again');
    }
    event.preventDefault();
  }

  const addEntryToTable = () => {
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
      <section id="add">{addEntryToTable()}</section>
      <section id="main">
        <GenTable entries={mainTable} />
      </section>
    </div>
  );
};
export default MainTablePage;
