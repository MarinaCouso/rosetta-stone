import React from 'react';
import userImage from '../../../images/sample.jpg';
import PreviewCardIcons from './PreviewCardIcons';

function PreviewCard(props) {
  const handleResetButton = () => {
    props.handleResetButton();
  };

  return (
    <div className={`showroom palette0${props.state.palette}`}>
      <button onClick={handleResetButton} className="reset-button">
        <i className="far fa-trash-alt"></i>
        Reset
      </button>
      <div className="layout">
        <div className={`showroom-card__texts palette${props.state.palette}__div `}>
          <h1 className={`layout__title palette${props.state.palette}__layout--title`}>{props.state.name || 'Gatete Frog'}</h1>
          <p className="layout__text">{props.state.job || 'Front-end developer'}</p>
        </div>

        <img className="photo" src={props.state.photo || userImage} alt="" title="tu foto" />

        <nav>
          <ul className="media-icons">
            <PreviewCardIcons jsclassicon="js-phone-icon" href={`tel:+34${props.state.phone}`} alt="Phone number" title="Call" icon="icon fas fa-mobile-alt" state={props.state.palette} />
            <PreviewCardIcons jsclassicon="js-mail-icon" href={`mailto:${props.state.email}`} alt="Mail" title="Mail" icon="icon far fa-envelope" state={props.state.palette} />
            <PreviewCardIcons jsclassicon="js-linkedin-icon" href={`https://www.linkedin.com/in/${props.state.linkedin}`} alt="Linkedin" title="Go to Linkedin" icon="icon fab fa-linkedin-in" target="_blank" state={props.state.palette} />
            <PreviewCardIcons jsclassicon="js-github-icon" href={`https://github.com/${props.state.github}`} alt="Github" title="Go to Github" icon="icon fab fa-github-alt" target="_blank" state={props.state.palette} />
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default PreviewCard;
