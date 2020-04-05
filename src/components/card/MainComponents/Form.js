import React from 'react';
import Title from './Title';

// handleInputData = () => {
//   if (ev.currentTarget.value !== undefined) {
//     ev.currentTarget.innerHTML = ev.currentTarget.value;
//   }
// };

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='section-page__fill collapsable-close'>
        <Title icon='far fa-keyboard' title='Rellena' />
        <form
          action=''
          method='GET'
          id='info-user'
          className='section-page__fill__form collapsable-content'
        >
          <label htmlFor='fullname'>Nombre completo</label>
          <input
            className='input-name'
            type='text'
            name='fullname'
            id='fullname'
            placeholder='Ej: Sally Jill'
            // onKeyUp={handleInputData}
            required
          />
          <label htmlFor='job'>Puesto</label>
          <input
            className='js-input-job'
            type='text'
            name='job'
            id='job'
            placeholder='Ej: Front-end unicorn'
            // onKeyUp={handleInputData}
            required
          />
          <label htmlFor='img' className='label-img'>
            Imagen de perfil
          </label>
          <div className='img-container'>
            <button type='button' className='btn-add js-btn-img'>
              Añadir imagen
            </button>
            <input
              type='file'
              name=''
              id='img-selector'
              className='hiddenField js__profile-upload-btn'
              // onChange={handleInputData}
            />
            <div className='img-user js-preview'></div>
          </div>
          <label htmlFor='email'>Email</label>
          <input
            className='js-input-mail'
            type='email'
            name='email'
            id='email'
            placeholder='Ej: sally-hill@gmail.com'
            // onKeyUp={handleInputData}
          />
          <label htmlFor='phone'>Teléfono</label>
          <input
            className='js-input-phone'
            type='tel'
            name='phone'
            id='phone'
            placeholder='Ej: 555-55-55-55'
            // onKeyUp={handleInputData}
          />
          <label htmlFor='linkendin'>Linkendin</label>
          <input
            className='js-input-linkedin'
            type='text'
            name='linkendin'
            id='linkendin'
            placeholder='Ej: linkendin.com/in/sally.hill@gmail.com'
            // onKeyUp={handleInputData}
          />
          <label htmlFor='github'>Github</label>
          <input
            className='js-input-github'
            type='text'
            name='github'
            id='github'
            placeholder='Ej: @sally-hill'
            // onKeyUp={handleInputData}
          />
        </form>
      </div>
    );
  }
}

export default Form;
