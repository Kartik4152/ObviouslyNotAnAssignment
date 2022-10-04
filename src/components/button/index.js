import React from 'react'

const Button = ({ children, onClick, className, disabled=false }) => {
  return (
    <div className={`rounded-[0.625rem] px-[1.3125rem] py-4 md:px-[4.375rem] gradient-button w-fit h-fit cursor-pointer select-none ${disabled && "cursor-not-allowed opacity-50"} ${className}`} onClick={onClick}>
        <span className='font-bold text-base leading-[1.125rem] md:text-xl md:leading-[1.4375rem] text-white'>{children}</span>
    </div>
  )
}

export default Button;