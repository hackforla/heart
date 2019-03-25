import { isEmail, isURL } from "validator";
import { isEmpty, isNumber } from "lodash";

const areChoicesValid = (choices, min, max) => {
  const minChoices = min || 1;
  const maxChoices = max || 100;
  const numChoices = choices.length;
  return numChoices >= minChoices && numChoices <= maxChoices;
};

const isTextValid = (text, min, max) => {
  const minLength = min || 1;
  const maxLength = max || 1000;
  const textLength = text.length;
  return textLength >= minLength && textLength <= maxLength;
};

const isValid = (value, min, max) => {
  if (isNumber(value)) return true;
  return Array.isArray(value)
    ? areChoicesValid(value, min, max)
    : isTextValid(value, min, max);
};

const isFieldValid = (type, value, min, max) => {
  switch (type) {
    case "email":
      return isEmail(value);
    case "url":
      return isURL(value);
    case "radio":
      return isEmpty(value);
    default:
      return isValid(value, min, max);
  }
};

export { isEmpty, isFieldValid };
