import React, { Component } from 'react'
import { Field } from 'redux-form/immutable'
import 'react-select/dist/react-select.css'

import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'


const DataField=({input, meta:{touched, error}, ...rest})=>(
	<div>
		<DatePicker
		{...input}
		{...rest}
		selected={input.value ? moment(input.value) : null}
		dateFormat="YYYY-MM-DD"
		/>
	</div>
);

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
				<Field name="insurance_valid" component={DataField}/>
			</div>

			<label>Insurance 2 policy number</label>
			<div>
				<Field name="insurance_2_policy_number" component="input" type="text"/>
			</div>

			<label>Insurance 2 valid</label>
			<div>
				<Field name="insurance_2_valid" component={DataField}/>
			</div>
			</div>
		</div>
	)
}
export default FormSeguro;