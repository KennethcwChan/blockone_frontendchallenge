import React from 'react';

function MainPage() {
  return (
    <div className="container message">
      <h1>
        Hello Alex, my name is Kenneth. I am currently an FDM consultant placed
        at DBS Bank.
      </h1>
      {setTimeout(function () {
        window.location.href = '/MainTable';
      }, 5000)}
    </div>
  );
}

export default MainPage;
