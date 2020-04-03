import React from 'react';
import ShareTwitter from './Share-Twitter';
function Share() {
  return (
    <div>
      <div className='section-page__share collapsable-close'>
        <partial src='_header-design.html' title='comparte' icon='fas fa-share-alt'></partial>
        <form className='section-page__share__form collapsable-content'>
          <button type='submit'>crear tarjeta</button>
        </form>
      </div>
      <ShareTwitter />
    </div>
  );
}
export default Share;
