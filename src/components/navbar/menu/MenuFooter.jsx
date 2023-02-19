import React from 'react'
import socials from '../../common/socials'
import { MenuFooterContainer } from './Menu.styles'
import { SocialIcon } from '../../footer/Footer.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { primaryColor } from '../../common/commonStyles'

const MenuFooter = () => {
  return (
    <MenuFooterContainer>
            {socials.map(social => <SocialIcon color={primaryColor} target={social.target} key={social.key} href={social.path}><FontAwesomeIcon fontSize={'24px'} icon={social.icon} /></SocialIcon>)}
    </MenuFooterContainer>
  )
}

export default MenuFooter