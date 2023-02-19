import React from 'react'
import { MenuBodyContainer, MenuButton } from './Menu.styles'
import { Separator } from '../../common/commonStyles'
import { Link } from 'react-router-dom'

const MenuBody = ({ onClick }) => {
  return (
    <MenuBodyContainer>
        <Link onClick={ onClick } to={'/register'}>
            <MenuButton>Crear cuenta</MenuButton>
        </Link>
        <Separator />
        <Link onClick={ onClick } to={'/login'}>    
            <MenuButton>Iniciar sesión</MenuButton> 
        </Link>
    </MenuBodyContainer>
  )
}

export default MenuBody