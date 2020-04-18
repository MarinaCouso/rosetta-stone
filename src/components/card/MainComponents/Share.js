import React from 'react';
import ShareTwitter from './ShareTwitter';
import SectionTitle from './SectionTitle';
// let showTwitter = '';
function Share(props) {
  console.log(props);

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
      <ShareTwitter data={props.state} showURL={props.showURL} />
    </div>
  );
}
export default Share;
