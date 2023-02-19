import React, { useState } from 'react'
import Hamburguer from './Hamburguer';
import { MenuContainer } from './Menu.styles';
import MenuHeader from './MenuHeader';
import MenuFooter from './MenuFooter';
import MenuBody from './MenuBody';

const Menu = () => {

    const [expanded, setExpanded] = useState(false);
    const handleExpanded = (value) => setExpanded(value)

    return (
        <>
            <Hamburguer onClick={() => handleExpanded(true)} />
            <MenuContainer expanded={expanded} >
                <MenuHeader onClick={() => handleExpanded(false)} />
                <MenuBody onClick={() => handleExpanded(false)} />
                <MenuFooter />
            </MenuContainer>
        </>
    )
}

export default Menu