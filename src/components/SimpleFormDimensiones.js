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

const minimo = value => parseFloat(value.split(' ')[0]) > 0 ? value : -1 * parseFloat(value.split(' ')[0])

const format = value => {
	if (value && parseInt(value.split(' ')[0]) > 0 && value.includes('kg')) {
		return value.split(' ')[0] + value.split(' ')[2] + ' kg ';
	}
	if (value) {
		return value + ' kg ';
	}
}

const formato = value => {
	if (value && parseInt(value.split(' ')[0]) > 0 && value.includes('mm')) {
		return value.split(' ')[0] + value.split(' ')[2] + ' mm ';
	}
	if (value) {
		return value + ' mm ';
	}
}

const people = value => {
	if (value && parseInt(value.split(' ')[0]) > 0 && value.includes('people')) {
		return value.split(' ')[0] + value.split(' ')[2] + ' people ';
	}
	if (value) {
		return value + ' people ';
	}
} 


const SimpleFormD = (props) => {
	const { handleSubmit } = props
	return (
		<div>
		<br/>
			<div>
			<center>
			<tr>DIMENSIONES</tr><br/>
			</center>
			</div>

			<div>
			<label>Cargo_capacity</label>
			<div>
				<Field name="cargo_capacity" component={ renderField } format={ format } type="text" normalize={ minimo }/>
			</div>

			<label>Cargo_bay</label>
			<div>
				<Field name="cargo_l" component={ renderField } format={ formato } type="text" normalize={ minimo }/>
				<Field name="cargo_w" component={ renderField } format={ formato } type="text" normalize={ minimo }/>
				<Field name="cargo_h" component={ renderField } format={ formato } type="text" normalize={ minimo }/>
			</div>

			<label>Number_of_passengers</label>
			<div>
				<Field name="number_of_passengers" component={ renderField } format={ people } type="text" normalize={ minimo }/>
			</div>
			</div>
		</div>
	)
}

export default SimpleFormD;