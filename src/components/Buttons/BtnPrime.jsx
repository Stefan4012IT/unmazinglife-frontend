import React from 'react'

const BtnPrime = ({text, onClick}) => {
  return (
    <div className='btn-prime' onClick={onClick}><span>{text}</span></div>
  )
}

export default BtnPrime