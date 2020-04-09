import React from 'react';
const fr = new FileReader();
class Image extends React.Component {
  constructor(props) {
    super(props);
    this.handleImage = this.handleImage.bind(this);
    this.writeImage = this.writeImage.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      profileImage: '',
    };
  }
  handleImage(e) {
    e.preventDefault();
    const myFile = this.fileInput.current.files[0];
    fr.addEventListener('load', this.writeImage);
    fr.readAsDataURL(myFile);
  }
  writeImage() {
    // profileImage.src = `${fr.result}`;
    // profilePreview.style.backgroundImage = `url(${fr.result})`;
    this.setState = {
      profileImage: fr.result,
    };
    //   saveOnLocalStorage();
  }
  render() {
    return (
      <div>
        <label for='img' class='label-img'>
          Imagen de perfil
        </label>
        <div class='img-container'>
          <button type='button' class='btn-add js-btn-img' onClick={this.handleImage}>
            Añadir imagen
          </button>
          <input type='file' name='' id='img-selector' class='hiddenField js__profile-upload-btn' ref={this.fileInput} />
          <div class='img-user js-preview'>
            <img src={this.state.profileImage} />
          </div>
        </div>
      </div>
    );
  }
}

export default Image;
// function getImage(e) {
//   var myFile = e.currentTarget.files[0];

//   fr.addEventListener('load', writeImage);
//   fr.readAsDataURL(myFile);
// }

// function writeImage() {
//   /* En la propiedad `result` de nuestro FR se almacena el resultado
//    */
//   profileImage.src = `${fr.result}`;
//   profilePreview.style.backgroundImage = `url(${fr.result})`;
//   userInfo.photo = fr.result;
//   saveOnLocalStorage();
// }

// function fakeFileClick() {
//   fileField.click();
// }
