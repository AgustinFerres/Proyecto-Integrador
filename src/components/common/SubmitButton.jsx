import React from 'react'
import { Button, FilledButton } from './commonStyles'

const SubmitButton = ({text}) => {
    return (
        <FilledButton type='submit'>{text}</FilledButton>
    )
}

export default SubmitButton