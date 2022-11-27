import React from 'react'
import { Navbar } from '../components/Navbar'

export const Layout = ({children}) => {
  return (
    <div className='main__layout'>
      <Navbar />
              {children}
      </div>
  )
}
