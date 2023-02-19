import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/index'
import Navbar from '../navbar/index'
import { FooterSpace } from '../common/commonStyles'

const Layout = () => {
  return (
    <>
        <Navbar />
        <section>
            <Outlet />
        </section>
        <FooterSpace />
        <Footer />
    </>
  )
}

export default Layout