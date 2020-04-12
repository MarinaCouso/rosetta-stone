import React from 'react';
import SectionTitle from './SectionTitle';
import FormInput from './FormInput';
import Image from './Image';

// const handleInputData = (props) => {
//   // if (ev.currentTarget.value !== undefined) {
//   //   ev.currentTarget.innerHTML = ev.currentTarget.value;
//   // }
//   console.log(props);
// };

function Form(props) {
  return (
    <div className='section-page__fill collapsable-close'>
      <SectionTitle icon='far fa-keyboard' title='Rellena' />
      <form action='' method='GET' id='info-user' className='section-page__fill__form collapsable-content'>
        <FormInput htmlFor='fullname' label='Nombre completo' className='input-name' type='text' name='name' id='fullname' placeholder='Ej: Sally Jill' handleInputForm={props.handleInputData} />

        <FormInput htmlFor='job' label='Puesto' className='js-input-job' type='text' name='job' id='job' placeholder='Ej: Front-end unicorn' handleInputForm={props.handleInputData} />
        <Image />
        {/* <label htmlFor='img' className='label-img'>
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
          <div className='img-user js-preview'></div> */}
        {/* </div> */}

        <FormInput htmlFor='email' label='Email' className='js-input-mail' type='email' name='email' id='email' placeholder='Ej: sally-hill@gmail.com' />

        <FormInput htmlFor='phone' label='Teléfono' className='js-input-phone' type='tel' name='phone' id='phone' placeholder='Ej: 555-55-55-55' />

        <FormInput htmlFor='linkendin' label='Linkendin' className='js-input-linkedin' type='text' name='linkendin' id='linkendin' placeholder='Ej: linkendin.com/in/sally.hill@gmail.com' />

        <FormInput htmlFor='github' label='Github' className='js-input-github' type='text' name='github' id='github' placeholder='Ej: @sally-hill' />
      </form>
    </div>
  );
}

export default Form;
