import React from 'react'

const Label = ({className, children}) => {
  return (
    <>
    <label className={` font-semibold text-lg text-secondary/50 ${className}`}>{children}</label>
    </>
  )
}

export default Label
