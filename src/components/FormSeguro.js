import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import Select from 'react-select'
import 'react-select/dist/react-select.css'


const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const FormSeguro=(props)=>{
	const { handleSubmit } = props
	return(
		<div>
		<br/>
			<div>
			<center>
			<tr>INSURANCE</tr><br/>
			</center>
			</div>
			
			<div>
			<label>Insurance policy number</label>
			<div>
				<Field name="insurance_policy_number" component="input"  type="text"/>
			</div>

			<label>Insurance valid</label>
			<div>
				<Field name="insurance_valid" component="input" type="text"/>
			</div>

			<label>Insurance 2 policy number</label>
			<div>
				<Field name="insurance_2_policy_number" component="input" type="text"/>
			</div>

			<label>Insurance 2 valid</label>
			<div>
				<Field name="insurance_2_valid" component="input" type="text"/>
			</div>
			</div>
		</div>
	)
}
export default FormSeguro