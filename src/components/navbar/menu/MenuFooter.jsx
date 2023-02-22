import React from 'react'
import socials from '../../common/socials'
import { MenuFooterContainer } from './Menu.styles'
import { SocialIcon } from '../../footer/Footer.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { primaryColor, Separator, Strong } from '../../common/commonStyles'

const MenuFooter = () => {

  const handleCloseSesion = () => {
    localStorage.removeItem('user');
    location.reload();
  }

  return (
    <MenuFooterContainer>
            {
              localStorage.getItem('user') && 
              <>
                <p>¿Deseas <Strong onClick={handleCloseSesion}>cerrar sesion</Strong>? </p>
                <Separator/>
              </>
            }
            <div>
              {socials.map(social => <SocialIcon color={primaryColor} target={social.target} key={social.key} href={social.path}><FontAwesomeIcon fontSize={'24px'} icon={social.icon} /></SocialIcon>)}
            </div>
    </MenuFooterContainer>
  )
}

export default MenuFooter