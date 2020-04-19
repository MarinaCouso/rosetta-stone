import React from 'react';
import { ApiData } from '../../../services/ApiData';
import { checkPropTypes } from 'prop-types';
let showCard = 'Aún no está creada la tarjeta';
function ShareTwitter(props) {
  console.log(props);
  function createCard() {
    getApiData();
  }
  // const URL = props.showURL;
  // function showURL(props.showURL) {
  //  console.log('estoy en ello', URL);
  // //  //   // debugger;
  //    if (URL.success) {
  //     showCard = `<a href='${URL}'></a>`;
  //   } else {
  //     showCard = 'ERROR:';
  //   }
  //  }

  const getApiData = () => {
    ApiData(props.data).then((result) => {
      if (result.success) {
        showCard = `<a href='${result.cardURL}'></a>`;
        // return ( const showCard = `<a href='${result.cardURL}'></a>`);
      } else {
        showCard = 'ERROR:' + result.error;
      }
    });
  };

  return (
    <div className="section-page__card-create">
      {/* <h3 className='section-page__card-create__title'>La tarjeta ha sido creada</h3> */}
      {/* <p>Una vez que solicites tu tarjeta en el botón de abajo, espera unos segundos</p>
      <a href={showCard} className='section-page__card-create__link-card'>
        {showCard}
      </a> */}
      <button type="submit" className="section-page__card-create__rrss-btn" onClick={createCard}>
        <i className="fab fa-twitter" style={{ fontSize: '18px' }}></i>
        Compartir en twitter
      </button>
      <p>{showCard}</p>
    </div>
  );
}
export default ShareTwitter;
