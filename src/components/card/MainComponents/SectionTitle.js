import React from 'react';

class SectionTitle extends React.Component {
  collapsable(e) {
    const collapsableTrigger = document.querySelectorAll('.collapsable-header');
    const parentEventArrow = e.currentTarget.parentElement;
    if (!parentEventArrow.classList.contains('collapsable-close')) {
      parentEventArrow.classList.add('collapsable-close');
    } else {
      for (const item of collapsableTrigger) {
        item.parentElement.classList.add('collapsable-close');
      }
      parentEventArrow.classList.remove('collapsable-close');
    }
  }
  render() {
    return (
      <header onClick={this.collapsable} className='section-page__header collapsable-header'>
        <h2 className='section-page__header__title'>
          <i className={this.props.icon} style={{ color: '#e17334' }}></i>
          {this.props.title}
        </h2>
        <button type='button' className='section-page__header__btn collapsable-btn'>
          <i className='fas fa-chevron-down'></i>
        </button>
      </header>
    );
  }
}

export default SectionTitle;
