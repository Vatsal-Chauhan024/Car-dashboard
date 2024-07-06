import React from 'react'

const Cards = ({cardHeadingProps, cardTextProps, cardIconProps, className}) => {
  return (
    <>
        <div className={`w-56 rounded-10 flex flex-col gap-4 ${className} pl-5 justify-center group hover:bg-btn-primary shadow-lg`}>
            <h2 className='text-primary font-medium group-hover:text-white'>{cardHeadingProps}</h2>
            <h3 className='text-secondary text-2xl font-semibold group-hover:text-white'>{cardTextProps}</h3>
        </div>
    </>
  )
}

export default Cards
