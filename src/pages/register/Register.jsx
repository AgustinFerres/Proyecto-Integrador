
import React, { useState } from 'react'
import SubmitButton from '../../components/common/SubmitButton'
import { Link } from 'react-router-dom'
import { errors, checkRequired, checkEmailPattern, checkPassword } from '../../utils/validations';
import { Form, Heading1, Heading4, Strong, SubmitContainer } from '../../components/common/commonStyles';
import InputValidated from '../../components/common/InputValidated';
import { NameContainer, NameInput } from './Register.styles';


const Register = () => {

  const [update, setUpdate] = useState(0);

const handleSubmit = e => {
  e.preventDefault()

  checkRequired('firstName', e.target[0].value)
  checkRequired('lastName', e.target[1].value)

  if (checkRequired('email', e.target[2].value)){

    checkEmailPattern('email', e.target[2].value)
  }
  
  if (checkRequired('password', e.target[3].value)) {

  checkPassword('password', e.target[3].value, e.target[4].value)
  }
  setUpdate(prev => prev + 1);
} 

  return (
      <Form onSubmit={handleSubmit} noValidate>
        <Heading1 align="center" color='primary'>
          Crear cuenta
        </Heading1> 
        <NameContainer>
          <NameInput type='text' label='Nombre' wrong={errors.firstName}></NameInput>
          <NameInput type='text' label='Apellido' wrong={errors.lastName}></NameInput>
        </NameContainer>
        <InputValidated type='email' label='Correo electronico' wrong={errors.email}></InputValidated>
        <InputValidated type='password' label='Contraseña' wrong={errors.password}></InputValidated>
        <InputValidated type='password' label='Confirmar Contraseña'></InputValidated>
        <SubmitContainer>
          <SubmitButton text={'Crear cuenta'}></SubmitButton>
          <Heading4 style={{marginTop: '20px'}}>¿Ya tienes una cuenta? <Link to={'/login'} style={{textDecoration: 'none', color: '#4285F4'}}>Iniciar sesión</Link></Heading4>
        </SubmitContainer>
      </Form>
  )
}

export default Register