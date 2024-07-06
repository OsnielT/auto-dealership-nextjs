import React from 'react'

export default function SlideButton({className, isDisabled = false, action , label}) {
    return (
    <button disabled={isDisabled} className={`${className} ${isDisabled ? "opacity-80" : " active:text-white hover:opacity-50"} bg-white/30 border-transparent border-2 rounded transition-opacity active:border-white duration-150 `} onClick={action}>{label}</button>
  )
}
