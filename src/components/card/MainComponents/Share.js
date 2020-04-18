import React from 'react';
import ShareTwitter from './ShareTwitter';
import SectionTitle from './SectionTitle';
// let showTwitter = '';
function Share(props) {
<<<<<<< HEAD
  console.log('aquiii', props);
=======
  console.log(props);
>>>>>>> eea1a7100fba65c68f7bf1ae61d85dbe7b5c30d4

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
