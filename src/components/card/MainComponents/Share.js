import React from 'react';
import ShareTwitter from './ShareTwitter';
import SectionTitle from './SectionTitle';
import PropTypes from 'prop-types';

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function Share(props) {
  const { name, job, linkedin, github, photo, palette, phone, email, URL } = props.state;
  return (
    <div>
      <div className="section-page__share collapsable-close">
        <SectionTitle icon="fas fa-share-alt" title="Comparte" />
        <form className="section-page__share__form collapsable-content">
          <button type="submit" onClick={props.getApiData} disabled={palette === '' || name === '' || job === '' || linkedin === '' || github === '' || phone === '' || validateEmail(email) === false || photo === '' ? true : false}>
            crear tarjeta
          </button>
        </form>
        <ShareTwitter cardURL={URL} />
      </div>
    </div>
  );
}

Share.defaultProps = {
  state: PropTypes.object.isRequired,
  getApiData: PropTypes.func.isRequired,
};

export default Share;
