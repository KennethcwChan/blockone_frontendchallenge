import React, { useState } from 'react';
import isValidDate from './ErrorHandler/DateValidation';
import isValidAction from './ErrorHandler/ActionValidation';
import isValidCurrency from './ErrorHandler/CurrencyValidation';
import isValidAmount from './ErrorHandler/AmountValidation';
import isValidDescription from './ErrorHandler/DescriptionValidation';
import archivedData from '../archivedData';

function AddTablePage(props) {
  const initialState = {
    timestamp: '',
    action: '',
    description: '',
    amount: '',
    currency: '',
  };
  const [mainTable, setMainTable] = useState(archivedData);
  const [timestamp, setTimestamp] = useState(initialState.timestamp);
  const [action, setAction] = useState(initialState.action);
  const [description, setDescription] = useState(initialState.description);
  const [amount, setAmount] = useState(initialState.amount);
  const [currency, setCurrency] = useState(initialState.currency);

  const addEntry = {
    timestamp: timestamp,
    action: action,
    description: description,
    amount: amount,
    currency: currency,
  };

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <form className="formContainer tableFadein" onSubmit={handleFormSubmit}>
        <input
          name="timestamp"
          type="timestamp"
          placeholder="Timestamp..."
          id="timestamp"
          value={addEntry.timestamp}
          onInput={(e) => setTimestamp(e.target.value)}
        />
        <input
          name="action"
          type="action"
          placeholder="Action..."
          id="action"
          value={addEntry.action}
          onInput={(e) => setAction(e.target.value)}
        />
        <input
          name="description"
          type="description"
          placeholder="Description..."
          id="description"
          value={addEntry.description}
          onInput={(e) => setDescription(e.target.value)}
        />
        <input
          name="amount"
          type="amount"
          placeholder="Amount..."
          id="amount"
          value={addEntry.amount}
          onInput={(e) => setAmount(e.target.value)}
        />
        <input
          name="currency"
          type="currency"
          placeholder="Currency..."
          id="currency"
          value={addEntry.currency}
          onInput={(e) => setCurrency(e.target.value)}
        />
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTablePage;
