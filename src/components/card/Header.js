import React from 'react';
import image from '../../images/awesome-profile-cards-logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a className="header__link" href="./index.html">
          <img src={image} alt="Awesome profile-cards logo" />
        </a>
      </div>
    </header>
  );
}

export default Header;
