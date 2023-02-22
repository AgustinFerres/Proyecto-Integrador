import React from 'react'
import { MenuHeaderContainer, MenuTitle } from './Menu.styles'
import Close from './Close'
import LoggedUser from '../LoggedUser'

const MenuHeader = ({ onClick }) => {
    return (
        <MenuHeaderContainer>
            <Close onClick={onClick} />
            {
                !localStorage.getItem('user') ?
                    <MenuTitle>Menú</MenuTitle>
                :
                <LoggedUser user={localStorage.getItem('user').toString()}/> 
            }
        </MenuHeaderContainer>
    )
}

export default MenuHeader