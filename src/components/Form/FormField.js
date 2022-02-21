import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & label {
    margin: 10px 0;
  }
`;

const FormField = React.forwardRef(
  ({ onChange, value, label, name, id, type = 'text', ...props }, ref) => {
    return (
      <Wrapper>
        <label htmlFor={id}>{label}</label>
        <input
          name={name}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          data-testid={label}
          {...props}
          ref={ref}
        />
      </Wrapper>
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
