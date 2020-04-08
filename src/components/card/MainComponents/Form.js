import React from 'react';
import SectionTitle from './SectionTitle';
import FormInput from './FormInput';

// handleInputData = () => {
//   if (ev.currentTarget.value !== undefined) {
//     ev.currentTarget.innerHTML = ev.currentTarget.value;
//   }
// };

function Form() {
  return (
    <div className='section-page__fill  {/*  collapsable-close*/}'>
      <SectionTitle icon='far fa-keyboard' title='Rellena' />
      <form
        action=''
        method='GET'
        id='info-user'
        className='section-page__fill__form collapsable-content'
      >
        <FormInput
          htmlFor='fullname'
          value='Nombre completo'
          className='input-name'
          type='text'
          name='fullname'
          id='fullname'
          placeholder='Ej: Sally Jill'
        />

        <FormInput
          htmlFor='job'
          value='Puesto'
          className='js-input-job'
          type='text'
          name='job'
          id='job'
          placeholder='Ej: Front-end unicorn'
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

        <FormInput
          htmlFor='email'
          value='Email'
          className='js-input-mail'
          type='email'
          name='email'
          id='email'
          placeholder='Ej: sally-hill@gmail.com'
        />

        <FormInput
          htmlFor='phone'
          value='Teléfono'
          className='js-input-phone'
          type='tel'
          name='phone'
          id='phone'
          placeholder='Ej: 555-55-55-55'
        />

        <FormInput
          htmlFor='linkendin'
          value='Linkendin'
          className='js-input-linkedin'
          type='text'
          name='linkendin'
          id='linkendin'
          placeholder='Ej: linkendin.com/in/sally.hill@gmail.com'
        />

        <FormInput
          htmlFor='github'
          value='Github'
          className='js-input-github'
          type='text'
          name='github'
          id='github'
          placeholder='Ej: @sally-hill'
        />
      </form>
    </div>
  );
}

export default Form;
