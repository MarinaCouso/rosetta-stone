import React from 'react';
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

//   button.classList.remove('share__button__enabled');
//   button.classList.add('share__button__unabled');
//   myCard.classList.remove('hidden');
// }

//

function ShareTwitter(props) {
  function createCard() {
    const json = JSON.stringify(props.data.state);
    console.log(json);
    // fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    //   method: 'POST',
    //   body: JSON.stringify(props.state),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //   .then(function (resp) {
    //     console.log(props.state);
    //     // return resp.json();
    //   })
    //   .then(function (result) {
    //     // showURL(result);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
  console.log(props.state);
  return (
    <div className='section-page__card-create'>
      <h3 className='section-page__card-create__title'>La tarjeta ha sido creada</h3>
      <a href='#' className='section-page__card-create__link-card' target='_blank'></a>
      <button type='submit' className='section-page__card-create__rrss-btn' onClick={createCard}>
        <i className='fab fa-twitter' style={{ fontSize: '18px' }}></i>
        Compartir en twitter
      </button>
    </div>
  );
}
export default ShareTwitter;
