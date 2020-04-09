import React from 'react';
import ShareTwitter from './ShareTwitter';
import SectionTitle from './SectionTitle';

class Share extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='section-page__share'>
          <SectionTitle icon='fas fa-share-alt' title='Comparte' />
          {/* <div className="section-page__share collapsable-close"> */}
          <partial src='_header-design.html' title='comparte' icon='fas fa-share-alt'></partial>
          <form className='section-page__share__form collapsable-content'>
            <button type='submit'>crear tarjeta</button>
          </form>
        </div>
        <ShareTwitter />
      </div>
    );
  }
}
export default Share;
