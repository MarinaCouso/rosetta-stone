import React from 'react';
import Title from './Title';

class SectionTitles extends React.Component {
  render() {
    return (
      <div>
        <Title icon='far fa-object-ungroup' title='Diseña' />
        <Title icon='far fa-keyboard' title='Rellena' />
        <Title icon='fas fa-share-alt' title='Comparte' />
      </div>
    );
  }
}

export default SectionTitles;
