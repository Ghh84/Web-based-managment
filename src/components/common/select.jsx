import React from 'react'

const Select = ({ name, label, options, setRole, ...rest }) => {
  return (
    <div className="form-group">
      <select
        class="form-control selectpicker"
        onChange={(e) => setRole(e.target.value)}
      >
        <option disabled="disabled" selected="default value">
          {label}
        </option>
        <option> 1</option>
        <option> 2</option>
        <option> 3</option>
      </select>
    </div>
  )
}

export default Select
