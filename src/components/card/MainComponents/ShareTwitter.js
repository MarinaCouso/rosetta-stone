import React from 'react';

// Prueba con datos fake porque la API necesita recibir todos los datos completos
const fakeData = {
  palette: '1',
  name: 'marina',
  job: 'cualquiera',
  photo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACmUlEQVR4AYyMA8xlRxTHfzNz8fw+r71Bbdu2bRthGTWqGdV2G9eOq2Bt43v2u3fm9NZu9yRHf7ElJbXjHkh6+T9x+n/Nm468ESc3IjJTxo964F8D5JXJO8pb02fy1+r07iKKwbqk5UZZe9iFf6QVgNwzcUeG40/ImZvozd2BMWrq2K/ulm92OxDfJHgKQh8AYgeED+L5z6rJ736nAOT26cspdGeS8aoEgwOdaOqD7z/7BKNzVp2YnbJm5sC2C5ixz+dgNKiknQe+vwJldzJy5dYXAheiBUw/RaYB2WjPSmnnPZtrdxjorJ5NdcVUvPxmiiOrwBmQpB0DaLtQ0wpOoB1AHpiYgoE8frrFPudczy6X3YqbWKFjh8hPL4FvoOGgCVgg4gTtqtmZSQhUQwgE0gaGC6zqH8j3q09ntZ3FuC3ywX1XQ7cH/RgqCroO6XkDXjxe3DHwY1gBbArpHCQ88NTD1LytCYMs2cCR6jlqm4tQb0MnDSUDQ3WoDOBpy6e0ggMRwGrGV6ZYsklgZAO+zpFzPvl+TIFNsNFC00eCLpQVNA3mRnvggel8Y0dEg9MUdZ31ecOS9cNEtottN5F6nRO2e5ZJqoz0AtRAG6lloJn+1NzoDqqBuzD0e+A01EJ2LcxnzN8MrS4T3BrOHn2TbdMLAVCBhcgQrxlBxf5NCmBd8bpPBqetOzDMtFF+BIFNOgbPJW3BSNIOUgoKhm47MavCO6mnXjzJA5DIP2l85aRPsqOlHQsDLXQUobq/BiStf2zBiaa9cAh08TtvlIsAFADA2uxNA07Fb0vYPjBbbBGk+oRhhNKOKFL0uyG9WhEdZT71c3LSwKrHqn8K+EPQhUnQBaLsgaIcoNDioZ15J9nvTmr/sJ4FyOoBUrwhHG0SnxcAAAAASUVORK5CYII=',
  email: 'marina@madrid.es',
  phone: '736736721',
  linkedin: 'https://www.linkedin.com/in/marinacousomartinez/',
  github: 'https://github.com/MarinaCouso',
};
// import '../../../stylesheets/components/_section-design.scss';

// JS COPIADO DEL PROYECTO MODULO 2 EQUIPO 1
// const shareButtonDiv = document.querySelector('.js-share__button');
// const button = document.querySelector('.js-button');
// const divList = document.querySelectorAll('.js-title-collapse');
// const myCard = document.querySelector('.js-share__card');

// function unCollapse() {
//   shareButtonDiv.classList.toggle('hidden');
// }
// divList[2].addEventListener('click', unCollapse);

// /////////////////

// function createCard() {
// PTE LIFTING
// const json = {
//   palette: getRadioValue(),
//   name: document.querySelector('.js-form-input-name').value,
//   job: document.querySelector('.js-form-input-job').value,
//   tel: document.querySelector('.js-form-input-tel').value,
//   email: document.querySelector('.js-form-input-email').value,
//   linkedin: document.querySelector('.js-form-input-linkedin').value,
//   github: document.querySelector('.js-form-input-github').value,
//   photo: photo
// };

//   console.log(json);

// function showURL(result) {
//   let cardUrl = result.cardURL;
//   console.log(cardUrl);
//   const twitter = document.querySelector('.js-share-button');
//   const link = document.querySelector('.js-share-link');
//   link.innerHTML = cardUrl;
//   link.href = cardUrl;
//   twitter.href = `https://twitter.com/intent/tweet?text=Mi+tarjeta+se+ha+creado+${cardUrl}`;
// }
//   button.classList.remove('share__button__enabled');
//   button.classList.add('share__button__unabled');
//   myCard.classList.remove('hidden');
// }

//
// F(x) de los apuntes
let showCard = '';
function showURL(result) {
  console.log('estoy en ello', result.cardURL);
  showCard = '<a href=' + result.cardURL + '/>';
  // if (result.success) {
  //   showCard = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
  // } else {
  //   showCard = 'ERROR:' + result.error;
  // }
}

function ShareTwitter(props) {
  console.log(props.data.state.photo);
  const json = fakeData;

  console.log(JSON.stringify(json));
  function createCard() {
    debugger;
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(json),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function (result) {
        console.log(showURL(result));
        showURL(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className='section-page__card-create'>
      {/* <h3 className='section-page__card-create__title'>La tarjeta ha sido creada</h3> */}
      {/* <a href='#' className='section-page__card-create__link-card' target='_blank'></a> */}
      <button type='submit' className='section-page__card-create__rrss-btn' onClick={createCard}>
        <i className='fab fa-twitter' style={{ fontSize: '18px' }}></i>
        Compartir en twitter
      </button>
      <p>{showCard}</p>
    </div>
  );
}
export default ShareTwitter;
