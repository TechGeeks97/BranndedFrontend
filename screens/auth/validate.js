export const validateLogin = (values) => {
  let errorList = {};
  let emailValidRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  Object.keys(values).map((item) => {
    if (
      item == "email" &&
      values[item] != "" &&
      !values[item].match(emailValidRegex)
    ) {
      errorList[item] = `Please enter a valid email`;
    }
    if (values[item] == "") {
      errorList[item] = `${item} is a required field`;
    }
  });
  return errorList;
};

export const validateSignup = (values) => {
  let errorList = {};
  let emailValidRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  Object.keys(values).map((item) => {
    if (
      item == "email" &&
      values[item] != "" &&
      !values[item].match(emailValidRegex)
    ) {
      errorList[item] = `Please enter a valid email`;
    }
    if (values[item] == "") {
      errorList[item] = `${item} is a required field`;
    }
  });
  return errorList;
};
