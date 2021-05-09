import React from 'react';
import { mask, unMask } from 'remask';
import { FormControl, Label, InputField, Error } from '../Styles/Styles';
const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  readOnly,
  customMask,
}) => {
  return (
    <FormControl>
      <Label htmlFor={name}>{label}</Label>
      <InputField
        id={name}
        name={name}
        type={type}
        value={customMask ? mask(unMask(value), customMask) : value}
        onChange={onChange}
        onBlur={onBlur}
        readOnly={readOnly}
      />
      {error && <Error>{error}</Error>}
    </FormControl>
  );
};

export default Input;
