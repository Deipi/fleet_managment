import React from 'react'
import { Field } from 'redux-form/immutable'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

var CreatableComb= React.createClass({
	displayName: 'CreatableComb',
	propTypes: {
		hint: React.PropTypes.string,
		label: React.PropTypes.string
	},
	getInitialState(){
		return{
			options: [
				{ value: 'petrol', label: 'Petrol'},
				{ value: 'diesel', label: 'Diesel'},
				{ value: 'gas', label: 'Gas'}
			]
		};
	},
	render (){
		const { props: { input : { onChange, value, name } } } = this;
		const { options } = this.state;
		return(
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select.Creatable
					options={options}
					name={name}
					onChange={onChange}
					value={value}
				/>
			</div>
		);
	}
});

const format = value => {
	if(value && parseInt(value.split(' ')[0]) > 0 && value.includes('L')){
		return value.split(' ')[0]+value.split(' ')[2]+ ' L ';
	}
	if(value){
		return value + ' L ';
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

const FormCombustible=(props)=>{
	const { handleSubmit } = props
	return (
		<div>
		<br/>
			<div>
			<center>
			<tr>FUEL</tr><br/>
			</center>
			</div>

			<div>
			<label>Fuel type</label>
			<div>
				<Field name="fuel_type" component={ CreatableComb }  type="text"/>
			</div>

			<label>Fuel grade</label>
			<div>
				<Field name="fuel_grade" component="input" type="text"/>
			</div>

			<label>Fuel consumption</label>
			<div>
				<Field name="fuel_consumption" component={ renderField } format={ format }/>
			</div>

			<label>Tank capacity</label>
			<div>
				<Field name="tank_capacity" component={ renderField } format={ format }/>
			</div>
			</div>
		</div>
	)
}
export default FormCombustible;