import React from 'react'
import { MenuBodyContainer, MenuButton } from './Menu.styles'
import { Separator } from '../../common/commonStyles'
import { Link } from 'react-router-dom'
import MapRoutes from '../MapRoutes'
import LoggedUser from '../LoggedUser'

const MenuBody = ({ onClick }) => {
  return (
    <MenuBodyContainer>
        { !localStorage.getItem('user') && 
            <MapRoutes onClick={ onClick } type="menuButton" />
        }
    </MenuBodyContainer>
  )
}

export default MenuBody