import React from 'react';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';



const Layout = ({children}) => {
  return (
    <>
     <HelmetProvider>
       {children}
      </HelmetProvider>
    <Outlet />
    </>
  )
}

export default Layout;