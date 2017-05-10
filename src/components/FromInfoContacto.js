import React from 'react'
import { Field } from 'redux-form/immutable'

const FormInfocontacto=(props)=>{
	const { handleSubmit } = props
	return(
		<div>
		<br/>
			<div>
				<center>
					<tr>CONTACT INFO</tr>
				</center>
			</div>

				<div>
					<label>Phone</label>
					<div>
						<Field name="phone" component="input" type="number" min="10"/>
					</div>

					<label>E-mail</label>
					<div>
						<Field name="email" component="input" type="email"/>
					</div>
				</div>
		</div>
	)
}
export default FormInfocontacto;