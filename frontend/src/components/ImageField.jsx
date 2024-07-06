import React from 'react'

const ImageField = ({src ,alt, className}) => {
  return (
   <>
   <img src={src} alt={alt} className={`rounded-full aspect-square w-10 h-10 object-cover`}/>
   </>
  )
}

export default ImageField
