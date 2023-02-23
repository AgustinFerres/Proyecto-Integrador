import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Input, InputContainer, InputError } from './commonStyles'

const InputValidated = ({label, type, wrong, className}) => {

    const [tipo, setTipo] = useState('password');

    const handleViewPassword = () =>{
        setTipo(prev => prev === 'password' ? 'text' : 'password');
    }

    return (
        <InputContainer className={className} wrong={wrong}>
            <label>{label}</label>
            <Input type={type === 'password' ? tipo : type}/>
            {label === 'Contraseña' && <FontAwesomeIcon icon={tipo === 'password' ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'} type='button' onClick={handleViewPassword}/>}
            {wrong && <InputError>
                {wrong.message}
            </InputError>}
            
        </InputContainer>
    )
}

export default InputValidated
