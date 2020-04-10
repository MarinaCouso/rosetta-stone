import React from 'react';

function PreviewCardIcons(props) {
  return (
    <li className='media-icon'>
      <a className={props.jsclassicon} href={props.href} alt={props.alt} title={props.title} target={props.target}>
        <div className={props.icon} style={{ color: '#114e4e' }}></div>
      </a>
    </li>
  );
}

export default PreviewCardIcons;
