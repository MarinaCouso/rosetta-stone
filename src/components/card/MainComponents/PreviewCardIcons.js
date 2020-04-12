import React from 'react';

function PreviewCardIcons(props) {
  // console.log(props);
  return (
    <li className={`media-icon palette${props.state}__mediaicon`}>
      <a className={props.jsclassicon} href={props.href} alt={props.alt} title={props.title} target={props.target}>
        <div className={`${props.icon} palette${props.state}__icon `}></div>
      </a>
    </li>
  );
}

export default PreviewCardIcons;
