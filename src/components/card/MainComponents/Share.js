import React from 'react';
import ShareTwitter from './ShareTwitter';
import SectionTitle from './SectionTitle';

class Share extends React.Component {
  // function showURL(result) {
  //   console.log('estoy en ello', result.cardURL);
  //   // debugger;
  //   if (result.success) {
  //     showCard = `<a href='${result.cardURL}'></a>`;
  //   } else {
  //     showCard = 'ERROR:' + result.error;
  //   }
  // }

  render() {
    return (
      <div>
        <div className="section-page__share collapsable-close">
          <SectionTitle icon="fas fa-share-alt" title="Comparte" />
          <form className="section-page__share__form collapsable-content">
            <button type="submit">crear tarjeta</button>
            {/* <p>{showCard}</p> */}
          </form>
        </div>
        <ShareTwitter cardURL={result.cardURL} />
      </div>
    );
  }
}
export default Share;
