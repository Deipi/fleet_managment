import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import validate from '../validate'

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const SimpleFormF = (props) => {
	const { handleSubmit } = props
	return (
		<form onSubmit = {handleSubmit}>
		<br/>
			<div>
			<center>
			<tr>FLOTILLA</tr><br/>
			</center>
			</div>

			<div>
			<label>Name</label>
			<div>
				<Field name="nombre" component={ renderField } type="text"/>
			</div>

			<label>Supervisor</label>
			<div>
				<Field name="supervisor" component={ renderField } type="text"/>
			</div>

			<label>Garage</label>
			<div>
				<Field name="garage" component={ renderField } type="text"/>
			</div>
			</div>
		</form>
	)
}

export default reduxForm({
  form: 'simpleFlotilla',  // a unique identifier for this form
  validate
})(SimpleFormF)