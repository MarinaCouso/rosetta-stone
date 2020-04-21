import React from 'react';
import SectionTitle from './SectionTitle';
import FormInput from './FormInput';
import Image from './Image';
import PropTypes from 'prop-types';

function Form(props) {
  return (
    <div className='section-page__fill collapsable-close'>
      <SectionTitle icon='far fa-keyboard' title='Rellena' />
      <form
        action=''
        method='GET'
        id='info-user'
        className='section-page__fill__form collapsable-content'
      >
        <FormInput
          htmlFor='fullname'
          label='Nombre completo'
          className='input-name'
          type='text'
          name='name'
          id='fullname'
          placeholder='Ej: Sally Jill'
          handleInputData={props.handleInputData}
          value={props.state.name}
        />
        {props.state.name ? '' : <p>Este campo es obligatorio</p>}
        <FormInput
          htmlFor='job'
          label='Puesto'
          className='js-input-job'
          type='text'
          name='job'
          id='job'
          placeholder='Ej: Front-end unicorn'
          handleInputData={props.handleInputData}
          value={props.state.job}
        />

        <Image handleInputImage={props.handleInputImage} state={props.state} />

        <FormInput
          htmlFor='email'
          label='Email'
          className='js-input-mail'
          type='email'
          name='email'
          id='email'
          placeholder='Ej: sally-hill@gmail.com'
          href=''
          handleInputData={props.handleInputData}
          value={props.state.email}
        />

        <FormInput
          htmlFor='phone'
          label='Teléfono'
          className='js-input-phone'
          type='tel'
          name='phone'
          id='phone'
          placeholder='Ej: 555-55-55-55'
          handleInputData={props.handleInputData}
          value={props.state.phone}
        />

        <FormInput
          htmlFor='linkedin'
          label='Linkedin'
          className='js-input-linkedin'
          type='text'
          name='linkedin'
          id='linkedin'
          placeholder='Ej: linkedin.com/in/sally.hill@gmail.com'
          href=''
          handleInputData={props.handleInputData}
          value={props.state.linkedin}
        />

        <FormInput
          htmlFor='github'
          label='Github'
          className='js-input-github'
          type='text'
          name='github'
          id='github'
          placeholder='Ej: @sally-hill'
          href=''
          handleInputData={props.handleInputData}
          value={props.state.github}
        />
      </form>
    </div>
  );
}

Form.propTypes = {
  state: PropTypes.object.isRequired,
  handleInputData: PropTypes.func.isRequired,
  handleInputImage: PropTypes.func.isRequired,
};

export default Form;
