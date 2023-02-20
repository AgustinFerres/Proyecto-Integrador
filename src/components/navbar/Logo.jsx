import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
    height: 50px;
`

const path = "/logo.svg"

const Logo = () => {
  return <LogoImage src={path} />
}

export default Logo

