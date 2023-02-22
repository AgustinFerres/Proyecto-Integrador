import React from 'react'
import { OutlinedButton, Separator } from '../common/commonStyles'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '../../utils/routes'
import { MenuButton } from './menu/Menu.styles'

const MapRoutes = ({ type, onClick }) => {

    const routeButton = (route) => {
        switch (type) {
            case "outlinedButton":
                return (
                    <Link onClick={onClick} key={route.key} to={route.path}>
                        <OutlinedButton>{route.label}</OutlinedButton>
                    </Link>
                )
            case "menuButton":
                return (
                    <React.Fragment key={route.key}>
                        <Link onClick={onClick} to={route.path}>
                            <MenuButton>{route.label}</MenuButton>
                        </Link>
                        <Separator />
                    </React.Fragment>
                )
        }
    }

    const location = useLocation();

    return (
        <>
            {
                routes.map(route => route.type != "hidden" && route.path != location.pathname ?
                    routeButton(route)
                    : "")
            }

        </>
    )
}

export default MapRoutes