import React from 'react'
import { MenuHeaderContainer, MenuTitle } from './Menu.styles'
import Close from './Close'

const MenuHeader = ({ onClick }) => {
    return (
        <MenuHeaderContainer>
            <Close onClick={onClick} />
            <MenuTitle>Menú</MenuTitle>
        </MenuHeaderContainer>
    )
}

export default MenuHeader