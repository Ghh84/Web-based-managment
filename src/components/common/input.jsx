import React, { Component } from 'react'
import Joi from 'joi-browser'
import Edit from '../transactions/edit'
class Input extends Component {
  state = {
    data: {},
    errors: {},
  }
  // schema = {
  //   userId: Joi.string(),
  //   sName: Joi.string().required().label('Name'),
  //   sCity: Joi.string().required().label('City'),
  //   sAmount: Joi.string().required().label('Amount'),
  //   sCountry: Joi.string().required().label('Country'),
  //   sName: Joi.string().required().label('Name'),
  //   sCurrency: Joi.string().required().label('Currency'),
  //   sPhone: Joi.number().required().min(0).max(100).label('Phone'),
  //   sEmail: Joi.string().email(),
  //   sName: Joi.string().required().label('Name'),
  //   sCity: Joi.string().required().label('City'),
  //   sAmount: Joi.string().required().label('Amount'),
  //   sCountry: Joi.string().required().label('Country'),
  //   rName: Joi.string().required().label('Name'),
  //   rCurrency: Joi.string().required().label('Currency'),
  //   rPhone: Joi.number().required().min(0).max(100).label('Phone'),
  //   rEmail: Joi.string().email(),

  //   username: Joi.string().required().label('Username'),
  //   password: Joi.string().required().label('Password'),
  // }

  validate = () => {
    const options = { abortEarly: false }
    const { error } = Joi.validate(this.state.data, this.schema, options)
    if (!error) return null

    const errors = {}
    for (let item of error.details) errors[item.path[0]] = item.message
    return errors
  }

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }
    const schema = { [name]: schema[name] }

    alert('I am here')
    const { error } = Joi.validate(obj, schema)
    return error ? error.details[0].message : null
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const errors = this.validate()
    this.setState({ errors: errors || {} })
    if (errors) return

    this.doSubmit()
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors }
    const errorMessage = this.validateProperty(input)

    if (errorMessage) errors[input.name] = errorMessage
    else delete errors[input.name]

    const data = { ...this.state.data }
    data[input.name] = input.value

    this.setState({ data, errors })
  }

  render() {
    const {
      name,
      label,
      required,
      setUsername,
      error,
      value = '',
      classN = 'col-5',
    } = this.props
    return (
      <div className={classN}>
        <div className="input-group">
          <label className="label">
            {' '}
            {label}
            <span class={required}></span>
          </label>
          <div className="input-group-icon">
            <input
              name={name}
              value={value}
              className="form-control"
              type="text"
              //validate
              //onMouseLeave={this.handleChange}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    )
  }
}

export default Input
