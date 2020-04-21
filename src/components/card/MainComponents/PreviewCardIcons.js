import React from 'react';
import PropTypes from 'prop-types';

function PreviewCardIcons(props) {
  return (
    <li className={`media-icon palette${props.state}__mediaicon`}>
      <a
        className={props.jsclassicon}
        href={props.href}
        alt={props.alt}
        title={props.title}
        target={props.target}
      >
        <div className={`${props.icon} palette${props.state}__icon `}></div>
      </a>
    </li>
  );
}

PreviewCardIcons.propTypes = {
  jsclassicon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  target: PropTypes.string,
  state: PropTypes.string.isRequired,
};

PreviewCardIcons.defaultProps = {
  target: '',
};

export default PreviewCardIcons;
