// Dependencies

import React, { } from 'react';
import PropType from 'prop-types'

// Stateless component / Functional component

const Field = (props) => (

  <div>

    <label>{props.label}</label>
    <input
      onChange={props.onChange}
      type={props.textarea ? 'textarea' : 'text'}
      value={props.value}
    />
  </div>
);

Field.propTypes = {
  label: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  textarea: PropType.bool.isRequired,
  value: PropType.string.isRequired,
};
Field.defaultProps = {
  textarea: false,
};

export default Field;