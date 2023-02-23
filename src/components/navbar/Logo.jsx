import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
    height: 50px;
`

const path = "https://i.ibb.co/Wx7dJqY/logo-1-2.png"

const Logo = () => {
  return <LogoImage src={path} />
}

export default Logo

