import React from 'react'
import { Heading4, Strong } from '../common/commonStyles'
import { UserContainer } from './Navbar.styles';

const LoggedUser = ({user}) => {

    const getInitials = (string) => {

        const array = string.trim().split(' ');

        return `${array[0].slice(0, 1).toUpperCase()}${array[1].slice(0, 1).toUpperCase()}`
    }

    return (
        <UserContainer>
            <div>
                <p>{getInitials(user)}</p>
            </div>
            <div>
                <Heading4 color='color3'>Hola,</Heading4>
                <Strong>{user}</Strong>
            </div>
        </UserContainer>
    )
}

export default LoggedUser