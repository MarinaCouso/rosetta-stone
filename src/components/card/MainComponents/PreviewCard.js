import React from 'react';
import userImage from '../../../images/sample.jpg';
import PreviewCardIcons from './PreviewCardIcons';

function PreviewCard(props) {
  // console.log(props);
  return (
    <div className={`showroom palette-${props.palette}`}>
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
            <PreviewCardIcons jsclassicon='js-phone-icon' href='' alt='Phone number' title='Call' icon='icon fas fa-mobile-alt' />
            <PreviewCardIcons jsclassicon='js-mail-icon' href='' alt='Mail' title='Mail' icon='icon far fa-envelope' />
            <PreviewCardIcons jsclassicon='js-linkedin-icon' href='' alt='Linkedin' title='Go to Linkedin' icon='icon fab fa-linkedin-in' target='_blank' />
            <PreviewCardIcons jsclassicon='js-github-icon' href='' alt='Github' title='Go to Github' icon='icon fab fa-github-alt' target='_blank' />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default PreviewCard;
