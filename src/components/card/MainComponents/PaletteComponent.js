import React from 'react';

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
      <input type='radio' id={props.id} name='colors' className='js-radio' value={props.value} checked={props.value === props.currentValue} onChange={handleChange} />
      <ul className={props.classList}>
        <li className='list--color'></li>
        <li className='list--color'></li>
        <li className='list--color'></li>
      </ul>
    </label>
  );
}

export default PaletteComponent;
