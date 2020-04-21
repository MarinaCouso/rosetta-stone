import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import Footer from '../components/card/Footer';
import mainLogo from '../images/awesome-profile-cards-logo.svg';

function Landing() {
  return (
    <>
      <div className='index-main'>
        <img className='index-main__image' src={mainLogo} alt='logo' />
        <h1 className='index-main__title'>Crea tu tarjeta de visita</h1>
        <p className='index-main__content'>Crea mejores contactos profesionales de forma fácil y cómoda</p>
        <div className='index-main__table'>
          <ul className='index-main__list'>
            <li>
              <i className='far fa-object-ungroup'></i>
              <p className='index-main__text-list'>Diseña</p>
            </li>
            <li>
              <i className='far fa-keyboard'></i>
              <p className='index-main__text-list'>Rellena</p>
            </li>
            <li>
              <i className='fas fa-share-alt'></i>
              <p className='index-main__text-list'>Comparte</p>
            </li>
          </ul>
        </div>
        <Link to='/Card' className='index-main__button'>
          Comenzar
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
