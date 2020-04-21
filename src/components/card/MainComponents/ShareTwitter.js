import React from 'react';
import PropTypes from 'prop-types';

function ShareTwitter(props) {
  const urlTwitter = 'Tarjeta creada por Rosseta Stone';
  const hastagTwitter = 'Adalab';
  return (
    <div className='section-page__card-create collapsable-content'>
      <h3 className='section-page__card-create__title'>
        La tarjeta ha sido creada
      </h3>

      <button type='submit' className='section-page__card-create__rrss-btn'>
        <i className='fab fa-twitter' style={{ fontSize: '18px' }}>
          <a
            href={`https://twitter.com/intent/tweet?text=${urlTwitter}&url=${props.cardURL}&hashtags=${hastagTwitter}`}
            className='section-page__card-create__link-card' /*target="_blank"*/
          >
            Compartir en twitter
          </a>
        </i>
      </button>
    </div>
  );
}

ShareTwitter.defaultProps = {
  cardURL: PropTypes.string,
};

export default ShareTwitter;
