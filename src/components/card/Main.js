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
      name: '',
      job: '',
      photo: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    };
    this.handlePaletteMain = this.handlePaletteMain.bind(this);
    this.handleInputData = this.handleInputData.bind(this);
    this.handleInputImage = this.handleInputImage.bind(this);
  }

  handlePaletteMain(data) {
    // console.log('Yo soy handlePaletteMain');
    // console.log(data.value);
    this.setState({
      palette: data.value,
    });
  }
  handleInputData(data) {
    // console.log('mi data de main', data.value);
    this.setState({
      [data.name]: data.value,
    });
  }
  handleInputImage(data) {
    // console.log('mi imagen de main', data.value);
    this.setState({
      photo: data.value,
    });
  }

  render() {
    console.log(this.state);
    return (
      <main className='section-profile'>
        <PreviewCard palette={this.state.palette} state={this.state} />
        <section className='section-page'>
          <Design
            palette={this.state.palette}
            handlePaletteMain={this.handlePaletteMain}
          />
          <Form
            handleInputData={this.handleInputData}
            state={this.state}
            handleInputImage={this.handleInputImage}
          />
          <Share />
        </section>
      </main>
    );
  }
}

export default Main;
