import React from 'react';
// import '../../../stylesheets/components/_section-design.scss';
function ShareTwitter() {
  return (
    <div className="section-page__card-create">
      <h3 className="section-page__card-create__title">La tarjeta ha sido creada</h3>
      <a href="#" className="section-page__card-create__link-card" target="_blank"></a>
      <button type="submit" className="section-page__card-create__rrss-btn">
        {/* <i className='fab fa-twitter' style='font-size: 18px;'
        ></i>  */}
        Compartir en twitter
      </button>
    </div>
  );
}
export default ShareTwitter;
