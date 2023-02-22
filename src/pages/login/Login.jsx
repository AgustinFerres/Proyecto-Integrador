import React from 'react'
import SubmitButton from '../../components/common/SubmitButton'
import { Link } from 'react-router-dom'
import { Form, Heading1, Heading4, SubmitContainer } from '../../components/common/commonStyles';
import InputValidated from '../../components/common/InputValidated';


const Login = () => {


  const handleSubmit = e => {
    e.preventDefault()

    if (e.target[0].value === 'prueba@gmail.com' && e.target[1].value === '123456'){

      localStorage.setItem('user', 'Brian Rodríguez')
      location.replace('/Proyecto-Integrador/')
    }
  }
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Heading1 align='center' color='primary'>
        Iniciar sesión
      </Heading1> 
      <InputValidated type='email' label='Correo electronico'></InputValidated>
      <InputValidated type='password' label='Contraseña'></InputValidated>
      <SubmitContainer>
        <SubmitButton text={'Ingresar'}></SubmitButton>
        <Heading4 style={{marginTop: '20px'}}>¿Aún no tenes cuenta? <Link to={'/register'} style={{textDecoration: 'none', color: '#4285F4'}}>Regístrate</Link></Heading4>
      </SubmitContainer>
    </Form>
  )
}

export default Login