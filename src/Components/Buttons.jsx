import React from 'react'

const Buttons = ({children, className=''}) => {
  return (
    <button className={`w-30 h-4 rounded-lg p-3 cursor-pointer text-center border-gray-300 ${className}`}>{children}</button>
  )
}

export default Buttons