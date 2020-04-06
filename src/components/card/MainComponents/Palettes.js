import React from 'react';
import PaletteComponent from './PaletteComponent';
import Title from './Title';

class Palettes extends React.Component {
  render() {
    // const handlePalette = (value) => {
    //   // console.log('Soy handle palette', value);
    //   this.props.handlePaletteInPreview(value);
    // };
    return (
      <div class='section-page__design'>
        <Title icon='far fa-object-ungroup' title='Diseña' />
        <div className='section-page__design__colors collapsable-content'>
          <h3 className='section-page__design__colors__subtitle'>colores</h3>
          <form action='' method='GET' id='select-color' className='section-page__design__colors__form'>
            <PaletteComponent id='colors1' value='1' currentValue={this.props.palette} aClass='section-page__design__colors__form__palette01' classList='section-page__design__colors__form__palette01--list' handlePalette={this.props.handlePaletteInPreview} />
            <PaletteComponent id='colors2' value='2' currentValue={this.props.palette} aClass='section-page__design__colors__form__palette02' classList='section-page__design__colors__form__palette02--list' handlePalette={this.props.handlePaletteInPreview} />
            <PaletteComponent id='colors3' value='3' currentValue={this.props.palette} aClass='section-page__design__colors__form__palette03' classList='section-page__design__colors__form__palette03--list' handlePalette={this.props.handlePaletteInPreview} />
          </form>
        </div>
      </div>
    );
  }
}

export default Palettes;
