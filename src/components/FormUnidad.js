import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import Select from 'react-select';
import validate from '../validate'
import 'react-select/dist/react-select.css';
import SimpleFormD from './SimpleFormDimensiones';

	
		 var Selected = require('react-select');

		 var optionsTY = [
		 	{ value: 'car', label: 'Car'},
		 	{ value: 'bus', label: 'Bus'},
		 	{ value: 'special', label: 'Special'}

		 ];

		 var optionsTR = [
		 	{ value: 'no tracker', label: 'No Tracker'},
		 	{ value: 'pepe', label: 'Pepe'},
		 	{ value: 'luis', label: 'Luis'},
		 	{ value: 'martin', label: 'Martin'}

		 ];

		  var optionsGR = [
		 	{ value: 'garage', label: 'Garage'},
		 	{ value: 'no garage', label: 'No Garage'}
		 ];

		  var optionsTG = [
		 	{ value: 'new', label: 'New'},
		 	{ value: 'old', label: 'Old'}
		 ];

 function logChange(value){
 	return(
 		value
 	)
 }

const format = value => {
	if(value && parseInt(value.split(' ')[0]) >0 && value.includes('Km/h')){
		return value.split(' ')[0] + value.split(' ')[2]+ ' Km/h ';
	}
	if(value){
		return value + ' Km/h ';
	}
}
 
 const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const FormUnidad = (props) => {
	const { handleSubmit, pristine,  reset, submitting } = props
	return (
		<form onSubmit = {handleSubmit}>
		<div>
        <label>Label*</label>
        <div>
          <Field name="label" component={renderField} type="text"/>
        </div>
      </div>
      <div>
        <label>Tracker</label>
        <div>
          <Field name="tracker" component="Selected"/>
          <Selected
          	name="form-field-name"
          	value="no tracker"
          	options={optionsTR}
          	onChange={logChange}/>
        </div>
      </div>

      <div>
        <label>Garage</label>
        <div>
          <Field name="garage" component="Selected"/>
          	<Selected
          	name="form-field-name"
          	value="garage"
          	options={optionsGR}
          	onChange={logChange}/>
 
        </div>
      </div>

      <div>
        <label>Model</label>
        <div>
          <Field name="model" component="input" type="text" placeholder="Model"/>
        </div>
      </div>
      
      <div>
        <label>Type*</label>
        <div>
          <Field name="type" component="Selected"/>
         	<Selected
          	name="form-field-name"
          	value="car"
          	options={optionsTY}
          	onChange={logChange}/>
        </div>
      </div>

      <div>
        <label>Vehicle registration plate</label>
        <div>
          <Field name="vehicle_registration_plate" component="input" type="text" placeholder="Vehicle"/>
        </div>
      </div>

      <div>
        <label>VIN</label>
        <div>
          <Field name="vin" component="input" type="text" placeholder="VIN"/>
        </div>
      </div>

      <div>
        <label>Chassis number</label>
        <div>
          <Field name="chassis_number" component="input" type="text" placeholder="Chassis number"/>
        </div>
      </div>

      <div>
        <label>Permited speed</label>
        <div>
          <Field name="permited_speed" component={renderField} format={format}/>
        </div>
      </div>

      <div>
        <label>Tags</label>
        <div>
          <Field name="tags" component="Selected"/>
          <Selected
          	name="form-field-name"
          	value="new"
          	options={optionsTG}
          	onChange={logChange}/>
        </div>
      </div>

      <SimpleFormD/>

       <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>

	</form>
	)
}

export default reduxForm({
	form: 'simpleInidad',
	validate
})(FormUnidad)