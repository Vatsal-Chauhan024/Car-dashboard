import React from 'react'

const HeadingComponent = ({headingProps}) => {
  return (
    <>
    <h1 className='text-3xl lg:text-5xl xl:text-6xl text-secondary font-semibold tracking-wide'>{headingProps}</h1>
    </>
  )
}

export default HeadingComponent
