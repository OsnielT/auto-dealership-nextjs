import React from 'react'

export default function SlideButton({className, isDisabled, action , label}) {
    return (
    <button disabled={!isDisabled} className={`${className} ${!isDisabled ? "opacity-80" : "active:bg-transparent active:text-white hover:opacity-50"} bg-white border rounded  transition-opacity duration-150 `} onClick={action}>{label}</button>
  )
}
