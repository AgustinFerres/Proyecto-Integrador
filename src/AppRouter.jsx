import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/Home.container'
import LoginPage from './pages/login/Login.container'
import RegisterPage from './pages/register/Register.container'
import Layout from './components/layout/Layout.container'
import './index.css'

import { routes } from './utils/routes'

function AppRouter() {
  let proxy = ""
  //   proxy = "http://127.0.0.1:8080"
  return (
    <BrowserRouter basename='/Proyecto-Integrador'>
        <Routes>
            <Route element={<Layout />}>
                {routes.map(route => 
                  <Route key={ route.key } path={ route.path } element={route.element } />)
                }
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
