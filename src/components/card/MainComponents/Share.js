import React from 'react';
import ShareTwitter from './ShareTwitter';
import SectionTitle from './SectionTitle';
// let showTwitter = '';
function Share(props) {
  console.log('aquiii', props);

  // function enableShareTwitter(props) {
  //   showTwitter = '<ShareTwitter state={props} />';
  //   console.log(showTwitter);
  // }
  return (
    <div>
      <div className="section-page__share collapsable-close">
        <SectionTitle icon="fas fa-share-alt" title="Comparte" />
        <form className="section-page__share__form collapsable-content">
          <button type="submit">crear tarjeta</button>
        </form>
      </div>
      <ShareTwitter data={props.state} />
    </div>
  );
}
export default Share;
