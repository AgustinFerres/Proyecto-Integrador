import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../utils/routes'
import { FilledButton, OutlinedButton } from '../common/commonStyles'
import Logo from './Logo'
import { LinksContainer, LogoLink, LogoText, NavbarContainer } from './Navbar.styles'
import Menu from './menu'
import LoggedUser from './LoggedUser'

const Navbar = () => {
    return (
        <NavbarContainer>
            <LogoLink to={'/'}>
                <Logo />
                <LogoText>Sentite como en tu hogar</LogoText>
            </LogoLink>

            <Menu />
            <LinksContainer>
                {localStorage.getItem('user') ? <LoggedUser user={localStorage.getItem('user').toString()}/> :
                
                
                routes.map(route => route.type != "hidden" ?
                    <Link key={route.key} to={route.path}>
                        <OutlinedButton>{route.label}</OutlinedButton>
                    </Link>
                    : "")}
            </LinksContainer>
        </NavbarContainer>
    )
}

export default Navbar