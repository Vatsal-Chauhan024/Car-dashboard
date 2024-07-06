import React from 'react'

const Button = ({className, children, onClick}, type) => {
  return (
   <>
   <button className={`bg-bg-primary border-2 border-solid border-btn-primary text-btn-primary hover:bg-btn-primary hover:text-white text-base w-full sm:w-40 capitalize py-2 rounded-10 ${className}`} onClick={onClick} type={type}>{children}</button>
   </>
  )
}

export default Button
