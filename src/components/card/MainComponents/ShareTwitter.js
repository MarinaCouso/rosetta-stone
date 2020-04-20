import React from 'react';
import { ApiData } from '../../../services/ApiData';
import { checkPropTypes } from 'prop-types';
let showCard = 'Aún no está creada la tarjeta';

function ShareTwitter(props) {
  console.log(props);
  function createCard() {
    getApiData();
  }
  //   .then(function (resp) {
  //       return resp.json();
  //     })
  //     .then(function (result) {
  //       showURL(result);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  const showURL = (result) => {
    console.log('estoy en ello', result.cardURL);
    return (showCard = result.success
      ? result.cardURL
      : 'ERROR:' + result.error);
  };

  const getApiData = () => {
    ApiData(props.data).then((result) => {
      showURL(result);
    });
  };

  return (
    <div className='section-page__card-create'>
      <button
        type='submit'
        className='section-page__card-create__rrss-btn'
        onClick={createCard}
      >
        <i className='fab fa-twitter' style={{ fontSize: '18px' }}></i>
        Compartir en twitter
      </button>
      {console.log('ESTOY EN EL RETURN' + showCard)}
      <p>
        <a href={`${showCard}`}>URL CREADA</a>
      </p>
    </div>
  );
}

export default ShareTwitter;
