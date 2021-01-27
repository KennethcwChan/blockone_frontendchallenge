import React from 'react';

const GenTable = (props) => {
  const loadHead = () => {
    let head = ['date', 'action', 'description', 'amount', 'currency'];

    return head.map((k, v) => {
      return <th key={v}>{k.toUpperCase()}</th>;
    });
  };

  const loadBody = () => {
    return (
      props.entries &&
      props.entries.map((entry) => {
        return (
          <tr key={entry.id}>
            <td>{entry.timestamp}</td>
            <td>{entry.action.toUpperCase()}</td>
            <td>{entry.description}</td>
            <td>{entry.amount}</td>
            <td>{entry.currency}</td>
          </tr>
        );
      })
    );
  };

  return (
    <div className="table-responsive">
      <table className="table center tableFadein">
        <thead>
          <tr>{loadHead()}</tr>
        </thead>
        <tbody>{loadBody()}</tbody>
      </table>
    </div>
  );
};

export default GenTable;
