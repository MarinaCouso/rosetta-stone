import React from 'react';
import ShareTwitter from './ShareTwitter';
import SectionTitle from './SectionTitle';

function Share(props) {
  console.log(props);
  return (
    <div>
      <div className='section-page__share collapsable-close'>
        <SectionTitle icon='fas fa-share-alt' title='Comparte' />
        <form className='section-page__share__form collapsable-content'>
          <button type='submit'>crear tarjeta</button>
        </form>
      </div>
      <ShareTwitter state={props} />
    </div>
  );
}
export default Share;
