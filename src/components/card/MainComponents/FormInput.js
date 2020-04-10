import React from 'react';

function FormInput(props) {
  return (
    <div>
      <label htmlFor={props.htmlFor}>{props.value}</label>
      <input
        className={props.className}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        // onKeyUp={handleInputData}
        required
      />
    </div>
  );
}
export default FormInput;
