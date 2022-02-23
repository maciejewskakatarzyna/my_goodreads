import React from 'react';
import PropTypes from 'prop-types';
import { FormItem, FormItemBar, Label, Input } from './FormField.styles';

const FormField = React.forwardRef(
  ({ onChange, value, label, name, id, placeholder, type = 'text', ...props }, ref) => {
    return (
      <FormItem>
        <Input
          name={name}
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          data-testid={label}
          {...props}
          ref={ref}
        />
        <Label htmlFor={id}>{label}</Label>

        <FormItemBar />
      </FormItem>
    );
  }
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
