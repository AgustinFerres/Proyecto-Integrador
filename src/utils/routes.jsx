import HomePage from '../pages/home/Home.container'
import LoginPage from '../pages/login/Login.container'
import RegisterPage from '../pages/register/Register.container'

export const routes = [
    {   
        "type": "hidden",
        "key": "home",
        "label": "Home",
        "path": "/Proyecto-Integrador/",
        "element": <HomePage />
    },
    {   
        "type": "route",
        "key": "register",
        "label": "Crear cuenta",
        "path": "/Proyecto-Integrador/register",
        "element": <RegisterPage />
    },
    {   
        "type": "route",
        "key": "login",
        "label": "Iniciar sesión",
        "path": "/Proyecto-Integrador/login",
        "element": <LoginPage />
    },
    {   
        "type": "hidden",
        "key": "notfound",
        "label": "",
        "path": "*",
        "element": <div>Not found</div>
    }
]