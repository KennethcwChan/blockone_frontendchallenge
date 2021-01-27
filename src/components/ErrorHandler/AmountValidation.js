function isValidAmount(addEntry, amountValidation) {
  const regex = /^[0-9.]+$/;
  const flag = true;

  if (!amountValidation) {
    console.log('Please enter an amount');
    return !flag;
  } else if (!regex.test(amountValidation)) {
    console.log('Please enter an amount');
    return !flag;
  } else {
    console.log('Amount success');
    return flag;
  }
}

export default isValidAmount;
