import React, { Component } from 'react'
class Form extends Component {
  renderInput(name, setName, type = 'text') {
    return (
      <div className="">
        <label className="label" class="required">
          {name}
        </label>
        <input
          className="input--style-4"
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="first_name"
        />
      </div>
    )
  }
  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    )
  }
}
export default Form
