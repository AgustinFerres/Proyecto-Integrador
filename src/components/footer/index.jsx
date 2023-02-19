import React from 'react'
import { CopyrightText, FooterContainer, SocialContainer, SocialIcon } from './Footer.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import socials from '../common/socials'

const Footer = () => {

  return (
    <FooterContainer>
      <CopyrightText color='white'>©2021 Digital Booking</CopyrightText>
      <SocialContainer>
        {socials.map(social => <SocialIcon target={social.target} key={social.key} href={social.path}><FontAwesomeIcon fontSize={'24px'} icon={social.icon} /></SocialIcon>)}
      </SocialContainer>
    </FooterContainer>
  )
}

export default Footer