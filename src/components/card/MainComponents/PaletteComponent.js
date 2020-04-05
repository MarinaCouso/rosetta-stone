import React from 'react';

function PaletteComponent() {
  return (
    <label htmlFor="colors" className="@@aClass">
      <input type="radio" id="colors" name="colors" className="js-radio" value="" />
      <ul className="@@classList">
        <li className="list--color"></li>
        <li className="list--color"></li>
        <li className="list--color"></li>
      </ul>
    </label>
  );
}

export default PaletteComponent;
