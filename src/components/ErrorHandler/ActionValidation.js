function isValidAction(addEntry, actionValidation) {
  const flag = true;
  if (
    actionValidation.toLowerCase().indexOf('debit') === -1 ||
    actionValidation.toLowerCase().indexOf('cebit') === -1
  ) {
    // First check for the pattern
    console.log('Action success');
    return flag;
  } else {
    console.log('Please enter a proper action (Debit/Credit)');
    addEntry['Action'] = '';
    return !flag;
  }
}

export default isValidAction;
