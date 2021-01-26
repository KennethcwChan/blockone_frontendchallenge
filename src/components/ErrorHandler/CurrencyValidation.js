function isValidCurrency(addEntry, currencyValidation) {
  const flag = true;

  if (
    currencyValidation === 'SGD' ||
    currencyValidation === 'USD' ||
    currencyValidation === 'HKD'
  ) {
    console.log('Currency success');
    return flag;
  } else {
    console.log('Please enter a correct currency (SGD/USD/HKD)');
    addEntry['Currency'] = '';
    return !flag;
  }
}

export default isValidCurrency;
