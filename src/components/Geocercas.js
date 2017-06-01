import React from 'react';
import { Field, reduxForm } from 'redux-form/immutable'


 const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const FormGeocercas=(props)=>{
	const { onChangeAction, handleSubmit, pristine, reset, submitting, actionSubmit } = props
	
	return(
		<form onSubmit={ handleSubmit(actionSubmit) }>
		<div>
			<div>
				<center>
					<tr>Geofences</tr>
				</center>
			</div>

			<div>
				<label>Name</label>
				<div>
					<Field name="name" component={renderField} type="text"/>
				</div>

				<label>Radius</label>
				<div>
					<Field name="radius" component={renderField} type="number"/>
				</div>

				<div>
        		<button type="submit" disabled={pristine || submitting}>Guardar</button>
      		</div>


			</div>
		</div>
		</form>
	)
}

export default reduxForm(FormGeocercas);