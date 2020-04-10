import React from 'react';

class SectionTitle extends React.Component {
  render() {
    return (
      <header className='section-page__header collapsable-header'>
        <h2 className='section-page__header__title'>
          <i className={this.props.icon} style={{ color: '#e17334' }}></i>
          {this.props.title}
        </h2>
        <button
          type='button'
          className='section-page__header__btn collapsable-btn'
        >
          <i className='fas fa-chevron-down'></i>
        </button>
      </header>
    );
  }
}

export default SectionTitle;
