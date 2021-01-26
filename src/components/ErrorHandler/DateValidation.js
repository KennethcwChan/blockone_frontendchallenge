function isValidDate(addEntry, timeStampValidation) {
  const date = new Date(timeStampValidation);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const realDate = `${year}-${month}-${day}`;
  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const regex = /^\d{4}-\d{1,2}-\d{1,2}$/;
  const flag = true;

  if (!realDate) {
    console.log('Please enter a timestamp in the format YYYY/MM/DD');
    return !flag;
  } else if (!regex.test(realDate)) {
    // First check for the pattern
    console.log('Please enter a valide date (YYYY/MM/DD)');
    addEntry['Timestamp'] = '';
    return !flag;
  } else if (
    year < 1000 ||
    year > 3000 ||
    month <= 0 ||
    month > 12 ||
    (day <= 0 && day > monthLength[month - 1]) //why does this return undefined?
  ) {
    // Check the ranges of month and year
    console.log(
      'Year cannot be less than 1000 or greater than 3000, month cannot be greater than 12 or less than 0 try again'
    );

    addEntry['Timestamp'] = '';
    return !flag;
  } else {
    console.log('Date success');
    return flag;
  }
}

export default isValidDate;
