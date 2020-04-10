import React from 'react';

function FormInput(props) {
  function handleInputForm(ev) {
    // const inputDataLabel = ev.currentTarget.name;
    // console.log(inputDataLabel);
    console.log('Me han cambiado', ev.currentTarget.name, ev.currentTarget.value);
    props.handleInputForm({
      [ev.currentTarget.name]: ev.currentTarget.value,
    });
  }
  return (
    <div>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input className={props.className} type={props.type} value={props.value} name={props.name} id={props.id} placeholder={props.placeholder} onKeyUp={handleInputForm} required />
    </div>
  );
}
export default FormInput;
