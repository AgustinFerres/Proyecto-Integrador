import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { primaryColor } from '../../common/commonStyles'
import { HamburguerButton } from './Menu.styles'


const Hamburguer = ({ onClick }) => {

    return <HamburguerButton onClick={() => onClick() }>
        <FontAwesomeIcon color={primaryColor} fontSize={'24px'} icon={"fa-solid fa-bars"} />
        </HamburguerButton>
}
export default Hamburguer