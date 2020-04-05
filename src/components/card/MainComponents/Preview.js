import React from 'react';
import Form from './Form';
import Header from '../Header';
import Palettes from './Palettes';
import Share from './Share';
import PreviewCard from './PreviewCard';

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <main className='section-profile'>
          <PreviewCard />
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
