import React, { useState } from 'react'
import Register from './Register'
import { errors, checkRequired, checkEmailPattern, checkPassword } from '../../utils/validations';

const RegisterContainer = () => {

    const [update, setUpdate] = useState(0);

    const handleSubmit = e => {
        e.preventDefault()

        checkRequired('firstName', e.target[0].value)
        checkRequired('lastName', e.target[1].value)

        if (checkRequired('email', e.target[2].value)) {

            checkEmailPattern('email', e.target[2].value)
        }

        if (checkRequired('password', e.target[3].value)) {

            checkPassword('password', e.target[3].value, e.target[4].value)
        }
        console.log(errors);
        setUpdate(prev => prev + 1)
    }

    return <Register />
}

export default RegisterContainer