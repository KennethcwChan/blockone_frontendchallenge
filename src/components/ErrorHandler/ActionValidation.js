function isValidAction(addEntry, actionValidation) {
  const flag = true;
  if (
    actionValidation === 'Debit' ||
    actionValidation === 'debit' ||
    actionValidation === 'Credit' ||
    actionValidation === 'credit'
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
