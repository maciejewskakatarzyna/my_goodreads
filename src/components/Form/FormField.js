import React from 'react';
import PropTypes from 'prop-types';
import { FormItem, FormItemBar, Label, Input } from './FormField.styles';

const FormField = React.forwardRef(
  (
    { onChange, value, label, name, id, placeholder, isRadio, isError, type = 'text', ...props },
    ref
  ) => {
    return (
      <FormItem isError={isError} isRadio={isRadio}>
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

        {type !== 'radio' && <FormItemBar isError={isError} />}
      </FormItem>
    );
  }
);

FormField.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string || PropTypes.number,
  isRadio: PropTypes.bool,
  isError: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

FormField.defaultProps = {
  type: 'text',
};

export default FormField;
