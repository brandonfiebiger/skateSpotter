const validate = (val, rules) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case 'minLength':
      isValid = minLengthValidator(val, rules[rule])
      break;
      default:
        isValid = true;
    }
  }
  return isValid;
}

const minLengthValidator = (val, minLength) => {
  if (val.length >= minLength) {
    return true;
  } else { 
    return false;
  }
}

export default validate;