import React from 'react';

function FormInput(props) {
  function handleInputForm(ev) {
    // const inputDataLabel = ev.currentTarget.name;
    // console.log(inputDataLabel);
    console.log(
      'Me han cambiado',
      ev.currentTarget.name,
      ev.currentTarget.value
    );
    props.handleInputForm({
      value: ev.currentTarget.value,
      name: ev.currentTarget.name,
    });
  }
  return (
    <div>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        className={props.className}
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder}
        onKeyUp={handleInputForm}
        href={props.href}
        required
      />
    </div>
  );
}
export default FormInput;
