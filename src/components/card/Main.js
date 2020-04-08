import React from 'react';
import Form from './MainComponents/Form';
import Design from './MainComponents/Design';
import Share from './MainComponents/Share';
import PreviewCard from './MainComponents/PreviewCard';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: '1',
    };
    this.handlePaletteMain = this.handlePaletteMain.bind(this);
  }

  handlePaletteMain(data) {
    // console.log('Yo soy handlePaletteMain');
    // console.log(data.value);
    this.setState({
      palette: data.value,
    });
  }

  render() {
    // console.log(this.state);
    return (
      <main className='section-profile'>
        <PreviewCard palette={this.state.palette} />
        <section class='section-page'>
          <Design
            palette={this.state.palette}
            handlePaletteMain={this.handlePaletteMain}
          />
          <Form />
          <Share />
          {/* <partial src="_section-design.html"></partial> */}
        </section>
      </main>
    );
  }
}

export default Main;
