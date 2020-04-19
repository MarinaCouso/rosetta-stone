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
      isFormValid: true,
    };
    this.handlePaletteMain = this.handlePaletteMain.bind(this);
    this.handleInputData = this.handleInputData.bind(this);
    this.handleInputImage = this.handleInputImage.bind(this);
    this.handleResetButton = this.handleResetButton.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  componentDidMount() {
    const userInfo = JSON.parse(localStorage.getItem('userData'));
    if (userInfo !== null) {
      this.setState(userInfo);
      console.log(userInfo);
    }
  }

  componentDidUpdate() {
    localStorage.setItem('userData', JSON.stringify(this.state));
  }

  handlePaletteMain(data) {
    this.setState({
      palette: data.value,
    });
  }
  handleInputData(data) {
    this.setState({
      [data.name]: data.value,
    });
  }
  handleInputImage(data) {
    this.setState({
      photo: data.value,
    });
  }
  handleResetButton() {
    this.setState({
      palette: '1',
      name: '',
      job: '',
      photo: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    });
  }

  handleValidation() {
    const { name, job, linkedin, github, photo, palette, email, phone } = this.state;
    // const { errorPhone, errorEmail } = this.state;

    if (palette === '' || name === '' || job === '' || linkedin === '' || github === '' || phone === '' || email === '' || photo === '') {
      this.setState({ isFormValid: false });
    }
  }

  render() {
    console.log(this.state);

    return (
      <main className="section-profile">
        <PreviewCard palette={this.state.palette} state={this.state} handleResetButton={this.handleResetButton} />
        <section className="section-page">
          <Design palette={this.state.palette} handlePaletteMain={this.handlePaletteMain} />
          <Form handleInputData={this.handleInputData} state={this.state} handleInputImage={this.handleInputImage} />
          <Share state={this.state} handleValidation={this.handleValidation} />
        </section>
      </main>
    );
  }
}

export default Main;
