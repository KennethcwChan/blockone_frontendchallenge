function isValidDescription(addEntry, descriptionValidation) {
  const flag = true;

  if (!descriptionValidation || descriptionValidation.length < 3) {
    console.log('Please enter a longer description');
    return !flag;
  } else {
    console.log('Description success');
    return flag;
  }
}

export default isValidDescription;
