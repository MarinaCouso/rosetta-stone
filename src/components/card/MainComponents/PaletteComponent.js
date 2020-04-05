import React from 'react';

function PaletteComponent(props) {
  return (
    <label htmlFor='colors' className={props.aClass}>
      <input
        type='radio'
        id='colors'
        name='colors'
        className='js-radio'
        value=''
      />
      <ul className={props.classList}>
        <li className='list--color'></li>
        <li className='list--color'></li>
        <li className='list--color'></li>
      </ul>
    </label>
  );
}

export default PaletteComponent;
