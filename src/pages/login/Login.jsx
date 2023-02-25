import React, { useState } from 'react'
import SubmitButton from '../../components/common/SubmitButton'
import { Link } from 'react-router-dom'
import { Form, Heading1, Heading4, SubmitContainer } from '../../components/common/commonStyles';
import InputValidated from '../../components/common/InputValidated';
import { checkUser, errors } from '../../utils/validations';


const Login = () => {

  const [update, setUpdate] = useState(0);

  const handleSubmit = e => {
    e.preventDefault()

    if (checkUser(e.target[0].value, e.target[1].value)){

      localStorage.setItem('user', 'Brian Rodríguez')
      location.replace('/Proyecto-Integrador/')
    }
    setUpdate(prev => prev + 1);
  }
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Heading1 align='center' color='primary'>
        Iniciar sesión
      </Heading1> 
      <InputValidated type='email' label='Correo electronico' wrong={errors.user}></InputValidated>
      <InputValidated type='password' label='Contraseña' wrong={errors.user}></InputValidated>
      <SubmitContainer>
        <SubmitButton text={'Ingresar'}></SubmitButton>
        <Heading4 style={{marginTop: '20px'}}>¿Aún no tenes cuenta? <Link to={'/register'} style={{textDecoration: 'none', color: '#4285F4'}}>Regístrate</Link></Heading4>
      </SubmitContainer>
    </Form>
  )
}

export default Login