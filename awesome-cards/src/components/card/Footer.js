import React from 'react';
import logo from '../../images/logo-adalab.png';
function Footer() {
  return (
    <footer className='footer'>
      <hr className='footer__mark' noshade size='1px' />
      <small className='footer__copy'>Awesome profile-cards © 2020</small>
      <div className='footer__logo'>
        <a href='https://adalab.es/' title='Ir a Adalab' target='_blank'>
          <img src={logo} alt='Adalab' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
