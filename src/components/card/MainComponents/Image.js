import React from 'react';
import PropTypes from 'prop-types';

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
    const profileImage = fr.result;
    this.props.handleInputImage({
      value: profileImage,
      id: 'photo',
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
          <input
            onChange={this.handleImage}
            type='file'
            name=''
            id='img-selector'
            className='hiddenField js__profile-upload-btn'
            ref={(fileInput) => (this.fileInput = fileInput)}
          />
          <button
            type='button'
            className='btn-add js-btn-img'
            onClick={this.fakeFileClick}
          >
            Añadir imagen
          </button>
          <div
            className='img-user js-preview'
            style={{ backgroundImage: `url(${this.props.state.photo})` }}
          ></div>
        </div>
      </div>
    );
  }
}

Image.propTypes = {
  handleInputImage: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

export default Image;
