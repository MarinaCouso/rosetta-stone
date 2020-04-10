import React from 'react';
const fr = new FileReader();
class Image extends React.Component {
  constructor(props) {
    super(props);
    this.handleImage = this.handleImage.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fakeFileClick = this.fakeFileClick.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      profileImage: '',
    };
  }
  handleImage(e) {
    let myFile = e.target.files[0];
    fr.addEventListener('load', this.writeImage);
    fr.readAsDataURL(myFile);
  }
  writeImage() {
    this.setState({
      profileImage: fr.result,
    });
  }
  fakeFileClick(e) {
    e.preventDefault();
    this.fileInput.click();
  }
  render() {
    return (
      <div>
        <label htmlFor='img' className='label-img'>
          Imagen de perfil
        </label>
        <div className='img-container'>
          <input onChange={this.handleImage} type='file' name='' id='img-selector' className='hiddenField js__profile-upload-btn' ref={(fileInput) => (this.fileInput = fileInput)} />
          <button type='button' className='btn-add js-btn-img' onClick={this.fakeFileClick}>
            Añadir imagen
          </button>
          <div className='img-user js-preview' style={{ backgroundImage: `url(${this.state.profileImage})` }}></div>
        </div>
      </div>
    );
  }
}

export default Image;
