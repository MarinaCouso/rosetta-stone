import React from 'react';
import PropTypes from 'prop-types';

function FormInput(props) {
  function handleInputForm(ev) {
    props.handleInputData({
      value: ev.currentTarget.value,
      name: ev.currentTarget.name,
    });
  }
  return (
    <div>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input className={props.className} type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} onChange={handleInputForm} href={props.href} value={props.value} required />
      <small className="input__fieldRequest">*Campo requerido</small>
    </div>
  );
}

FormInput.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  href: PropTypes.string,
  handleInputForm: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
  href: '',
};

export default FormInput;
