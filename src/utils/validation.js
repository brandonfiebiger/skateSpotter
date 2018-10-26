const validate = (val, rules) => {
  let isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case 'minLength':
        isValid = isValid && minLengthValidator(val, rules[rule])
        break;
      case 'isEmail':
        isValid = isValid && emailValidator(val, rules[rule]);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
}

const emailValidator = (val) => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(val);
}

const minLengthValidator = (val, minLength) => {
  if (val.length >= minLength) {
    return true;
  } else { 
    return false;
  }
}

export default validate;