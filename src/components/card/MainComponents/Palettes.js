import React from 'react';
import PaletteComponent from './PaletteComponent';

function Palettes() {
  return (
    <div className="section-page__design__colors collapsable-content">
      <h3 className="section-page__design__colors__subtitle">colores</h3>
      <form action="" method="GET" id="select-color" className="section-page__design__colors__form">
        <PaletteComponent aClass="section-page__design__colors__form__palette01" classList="section-page__design__colors__form__palette01--list" />
        <PaletteComponent aClass="section-page__design__colors__form__palette02" classList="section-page__design__colors__form__palette02--list" />
        <PaletteComponent aClass="section-page__design__colors__form__palette03" classList="section-page__design__colors__form__palette03--list" />
      </form>
    </div>
  );
}

export default Palettes;
