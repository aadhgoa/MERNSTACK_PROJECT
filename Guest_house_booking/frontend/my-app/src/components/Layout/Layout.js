import React from 'react'
import Header from '../header/Header'
import Footers from '../Footer/Footers'
import Routers from '../../Routers/Routers'



const Layout = () => {
  return (
    <>
    <Header/>
    <Routers/>
    <Footers/>
    </>
  )
}

export default Layout