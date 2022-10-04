import React from 'react'

const Input = ({value, onChange, label, className}) => {
  return (
    <label className={`flex flex-col font-bold text-primary-400 ${className}`}>
        {label}
        <input value={value} onChange={onChange} className="bg-transparent p-2 outline-double outline-2 outline-primary-400/50 rounded-sm mt-2"/>
    </label>
  )
}

export default Input;