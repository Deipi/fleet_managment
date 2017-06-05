import React from 'react'
import { Field } from 'redux-form/immutable'
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

const FormLicenciaConductor=(props)=>{
	const { handleSubmit }=props
	return(
		<div>
		<br/>
			<div>
				<center>
					<tr>DRIVER LICENSE</tr>
				</center>
			</div>

				<div>
					<label>Driver license number</label>
					<div>
						<Field name="driver_license_number" component="input" type="number"/>
					</div>

					<label>Driver license class</label>
					<div>
						<Field name="driver_license_class" component="input" type="text"/>
					</div>

					<label>Expiration date</label>
					<div>
						<Field name="expiration_date" component={DataField} />
					</div>
				</div>
		</div> 
	)
}
export default FormLicenciaConductor;