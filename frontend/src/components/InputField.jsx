import React from 'react'

const InputField = ({type , onChange, placeholder, value, name, readOnly, className}) => {
  return (
    <>
      <input type={type} onChange={onChange} placeholder={placeholder} value={value} name={name} readOnly= {readOnly} className={` h-10 w-full flex items-center px-5 bg-bg-secondary/50 border border-solid border-stroke-primary rounded-10 outline-none focus:bg-bg-primary ${className}`} required/> 
    </>
  )
}

export default InputField
