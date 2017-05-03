import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

const minimo = value => parseFloat(value.split(' ')[0]) > 0 ? value: -1 * parseFloat(value.split(' ')[0])
const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const FormWheelbase=(props)=>{
	const { handleSubmit } = props
	return (
		<div>
		<br/>
			<div>
			<center>
			<tr>WHEELBASE</tr><br/>
			</center>
			</div>

			<div>
			<label>Wheel arrangement</label>
			<div>
				<Field name="wheel_front" component="input"  type="number" normalize={ minimo}/>X
				<Field name="wheel_rear" component="input"  type="number" normalize={minimo}/>
			</div>

			<label>Tyre size</label>
			<div>
				<Field name="tyre_size" component="input" type="text"/>
			</div>

			<label>Tyres number</label>
			<div>
				<Field name="tyres_number" component={ renderField } type="number" normalize={ minimo }/>
			</div>
			</div>
		</div>
	)
}
export default FormWheelbase