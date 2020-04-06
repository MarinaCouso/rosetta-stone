import React from 'react';
import Form from './Form';
import Header from '../Header';
import Palettes from './Palettes';
import Share from './Share';
import PreviewCard from './PreviewCard';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: '1'
    };
    this.handlePaletteInPreview = this.handlePaletteInPreview.bind(this);
  }

  handlePaletteInPreview(data) {
    // console.log('Yo soy handlePaletteInPreview');
    // console.log(data.value);
    this.setState({
      palette: data.value
    });
  }

  render() {
    // console.log(this.state);
    return (
      <div>
        <Header />
        <main className="section-profile">
          <PreviewCard palette={this.state.palette} />
          <section class="section-page">
            <Palettes
              palette={this.state.palette}
              handlePaletteInPreview={this.handlePaletteInPreview}
            />
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
