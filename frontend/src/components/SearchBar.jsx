import React from 'react'

const SearchBar = ({value,onChange, placeholder, className}) => {
  return (
  <>
  <input type="text" value={value} onChange={onChange} placeholder={placeholder} className={`w-full rounded-10 bg-white p-3 outline-none border border-solid ${className}`}/>
  </>
  )
}

export default SearchBar
