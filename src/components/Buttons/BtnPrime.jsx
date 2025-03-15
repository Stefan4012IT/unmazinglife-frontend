import React from 'react'

const BtnPrime = ({text, onClick}) => {
  return (
    <div className='btn-prime no-select' onClick={onClick}><span>{text}</span></div>
  )
}

export default BtnPrime