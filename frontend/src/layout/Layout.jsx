import React from 'react'
import Aside from "../components/Aside"

const Layout = ({children}) => {
  return (
    <>
    <div className="w-full h-full flex flex-col xl:flex-row gap-2 sm:gap-8 bg-white">
        <div className="xl:max-w-64 w-full xl:min-h-screen bg-bg-secondary">
          <Aside  />
        </div>
        <div className="w-full px-5 mt-5 xl:px-0 xl:pr-5">
         {children}
        </div>
      </div>
    </>
  )
}

export default Layout
