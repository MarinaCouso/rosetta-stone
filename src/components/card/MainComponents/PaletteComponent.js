import React from 'react';
import PropTypes from 'prop-types';

function PaletteComponent(props) {
  function handleChange(ev) {
    // console.log('Me han cambiado', ev.currentTarget.value);
    props.handlePalette({
      name: 'palettes',
      value: ev.currentTarget.value,
    });
  }
  // console.log(props);
  return (
    <label htmlFor={props.id} className={props.aClass}>
      <input
        type='radio'
        id={props.id}
        name='colors'
        className='js-radio'
        value={props.value}
        checked={props.value === props.currentValue}
        onChange={handleChange}
      />
      <ul className={props.classList}>
        <li className='list--color'></li>
        <li className='list--color'></li>
        <li className='list--color'></li>
      </ul>
    </label>
  );
}

PaletteComponent.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  currentValue: PropTypes.string.isRequired,
  aClass: PropTypes.string.isRequired,
  classList: PropTypes.string.isRequired,
  handlePalette: PropTypes.func.isRequired,
};

export default PaletteComponent;
