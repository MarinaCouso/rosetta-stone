import React from 'react';
import ShareTwitter from './ShareTwitter';
import SectionTitle from './SectionTitle';
import { ApiData } from '../../../services/ApiData';

let showCard = 'Aún no está creada la tarjeta';

function Share(props) {
  console.log(props);

  // function createCard() {
  //   getApiData();
  // }

  const showURL = (result) => {
    console.log('estoy en ello', result.cardURL);
    return (showCard = result.success ? result.cardURL : 'ERROR:' + result.error);
  };

  function getApiData() {
    ApiData(props.state).then((result) => {
      showURL(result);
    });
  }

  const { name, job, linkedin, github, photo, palette, phone, email } = props.state;
  return (
    <div>
      <div className="section-page__share collapsable-close">
        <SectionTitle icon="fas fa-share-alt" title="Comparte" /*onClick={handleValidationInput}*/ />
        <form className="section-page__share__form collapsable-content">
          <button type="submit" onClick={getApiData} className={`${palette === '' || name === '' || job === '' || linkedin === '' || github === '' || phone === '' || email === '' || photo === '' ? '' : 'validation__color'}`}>
            crear tarjeta
          </button>
          <p>{showCard}</p>
        </form>
      </div>
      <ShareTwitter cardURL={showCard} />
    </div>
  );
}

export default Share;
