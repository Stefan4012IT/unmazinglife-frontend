import React from 'react'

function BtnClose({ onClick }) {
  return (
    <div className="btn-close-box no-select" onClick={onClick}>
        <div className="btn-close line-1"></div>
        <div className="btn-close line-2"></div>
    </div>
  )
}

export default BtnClose