import React from 'react';
import Form from './Form';
import Header from '../Header';
import userImage from '../../../images/sample.jpg';
import Palettes from './Palettes';
import Share from './Share';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <main className='section-profile'>
          <div className='showroom'>
            <button className='reset-button'>
              <i className='far fa-trash-alt'></i>
              Reset
            </button>
            <div className='layout'>
              <div className='showroom-card__texts'>
                <h1 className='layout__title'>Gatete Frog</h1>
                <p className='layout__text'>Front-end developer</p>
              </div>

              <img className='photo' src={userImage} alt='' title='tu foto' />

              <nav>
                <ul className='media-icons'>
                  <li className='media-icon'>
                    <a
                      className='js-phone-icon'
                      href=''
                      alt='Phone number'
                      title='Call'
                    >
                      <div
                        className='icon fas fa-mobile-alt'
                        style={{ color: '#114e4e' }}
                      ></div>
                    </a>
                  </li>
                  <li className='media-icon'>
                    <a className='js-mail-icon' href='' alt='Mail' title='Mail'>
                      <i
                        className='icon far fa-envelope'
                        style={{ color: '#114e4e' }}
                      ></i>
                    </a>
                  </li>
                  <li className='media-icon'>
                    <a
                      href=''
                      alt='Linkedin'
                      title='Go to Linkedin'
                      className='js-linkedin-icon'
                      target='_blank'
                    >
                      <div
                        className='icon fab fa-linkedin-in'
                        style={{ color: '#114e4e' }}
                      ></div>
                    </a>
                  </li>
                  <li className='media-icon'>
                    <a
                      className='js-github-icon'
                      className=''
                      href=''
                      alt='Github'
                      title='Go to Github'
                      target='_blank'
                    >
                      <div
                        className='icon fab fa-github-alt'
                        style={{ color: '#114e4e' }}
                      ></div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <section class='section-page'>
            <Palettes />
            <Form />
            <Share />
            {/* <partial src="_section-design.html"></partial> */}
          </section>
        </main>
      </div>
    );
  }
}

export default Preview;
