import React from 'react';
import PropTypes from 'prop-types';
import { FormItem, FormItemBar, Label, Input } from './FormField.styles';

const FormField = React.forwardRef(
  ({ onChange, value, label, name, id, placeholder, isRadio, type = 'text', ...props }, ref) => {
    return (
      <FormItem isRadio={isRadio}>
        <Input
          name={name}
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          data-testid={label}
          isRadio={isRadio}
          {...props}
          ref={ref}
        />
        <Label htmlFor={id} isRadio={isRadio}>
          {label}
        </Label>

        {type !== 'radio' && <FormItemBar />}
      </FormItem>
    );
  }
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

export default FormField;
