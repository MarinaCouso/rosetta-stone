import React from 'react';
import ShareTwitter from './ShareTwitter';
import SectionTitle from './SectionTitle';

let showCard = 'Aún no está creada la tarjeta';

function Share(props) {
  // function showURL(result) {
  //   console.log('estoy en ello', result.cardURL);
  //   // debugger;
  //   if (result.success) {
  //     showCard = `<a href='${result.cardURL}'></a>`;
  //   } else {
  //     showCard = 'ERROR:' + result.error;
  //   }
  // }

  console.log(props);
  // console.log(JSON.stringify(props.data));

  function createCard() {
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
      method: 'POST',
      body: JSON.stringify(props.data.state),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function (result) {
        showURL(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  function showURL(result) {
    console.log('estoy en ello', result.cardURL);
    // debugger;
    if (result.success) {
      showCard = `<a href='${result.cardURL}'></a>`;
    } else {
      showCard = 'ERROR:' + result.error;
    }
  }

  return (
    <div>
      <div className="section-page__share collapsable-close">
        <SectionTitle icon="fas fa-share-alt" title="Comparte" />
        <form className="section-page__share__form collapsable-content">
          <button type="submit" onClick={createCard}>
            crear tarjeta
          </button>
          {/* <p>{showCard}</p> */}
        </form>
      </div>
      <ShareTwitter /*cardURL={result.cardURL}*/ />
    </div>
  );
}

export default Share;

// let showCard = 'Aún no está creada la tarjeta';

// function ShareTwitter(props) {
//   // let prueba = props.data.state;
//   console.log(props);
//   console.log(JSON.stringify(props.data));
//   function createCard() {
//     fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
//       method: 'POST',
//       body: JSON.stringify(props.data.state),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then(function (resp) {
//         return resp.json();
//       })
//       .then(function (result) {
//         showURL(result);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
//   function showURL(result) {
//     console.log('estoy en ello', result.cardURL);
//     // debugger;
//     if (result.success) {
//       showCard = `<a href='${result.cardURL}'></a>`;
//     } else {
//       showCard = 'ERROR:' + result.error;
//     }
//   }
//   return (
//     <div className="section-page__card-create">
//       {/* <h3 className='section-page__card-create__title'>La tarjeta ha sido creada</h3> */}
//       {/* <p>Una vez que solicites tu tarjeta en el botón de abajo, espera unos segundos</p>
//       <a href={showCard} className='section-page__card-create__link-card'>
//         {showCard}
//       </a> */}
//       <button type="submit" className="section-page__card-create__rrss-btn" onClick={createCard}>
//         <i className="fab fa-twitter" style={{ fontSize: '18px' }}></i>
//         Compartir en twitter
//       </button>
//       <p>{showCard}</p>
//     </div>
//   );
// }
// export default ShareTwitter;
