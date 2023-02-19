import React from 'react'
import { CloseButton } from './Menu.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Close = ({ onClick }) => {

    return <CloseButton onClick={() => onClick() }>
        <FontAwesomeIcon color={'white'} fontSize={'24px'} icon={"fa-solid fa-xmark"} />
    </CloseButton>
}

export default Close