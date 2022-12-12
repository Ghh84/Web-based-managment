import React from 'react'
const Button = ({ label, handleAdd }) => {
  return (
    <button
      className="btn btn-primary"
      type="button"
      onClick={() => handleAdd()}
    >
      {label}
    </button>
  )
}

export default Button
