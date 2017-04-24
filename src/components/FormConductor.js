import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import validate from '../validate'
import FormInfocontacto from './FromInfoContacto'
import FormLicenciaConductor from './FormLicenciaConductor'

var CreatableTR=React.createClass({
	displayName: 'CreatableTY',
	propTypes: {
	    hint: React.PropTypes.string,
	    label: React.PropTypes.string
	},
	getInitialState(){
		return{
			optionsTR: [
				{ value: 'no tracker', label: 'No Tracker'},
			    { value: 'pepe', label: 'Pepe'},
			    { value: 'luis', label: 'Luis'},
			    { value: 'martin', label: 'Martin'}
			]
		};
	},
	handleOnChange (value) {
		const { optionsTR } = this.setState({value});
	},
	render (){
		const { optionsTR, value } = this.state;
		return(
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select.Creatable
					options={optionsTR}
					onChange={this.handleOnChange}
					value={value}
				/>
			</div>
		);
	}
});

var CreatableDEP=React.createClass({
	displayName: 'CreatableDEP',
	propTypes: {
		hint: React.PropTypes.string,
		label: React.PropTypes.string
	},
	getInitialState(){
		return{
			optionsDEP: [
				{ value: 'des', label: 'Desarrollo'},
				{ value: 'dis', label: 'Diseño'},
				{ value: 'ven', label: 'Ventas'}
			]
		};
	},
	handleOnChange (value){
		const { optionsDEP } = this.setState({value});
	},
	render (){
		const { optionsDEP, value } = this.state;
		return(
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select.Creatable
					options={optionsDEP}
					onChange={this.handleOnChange}
					value={value}
				/>
			</div>
		);
	}
});

var CreatableTAG=React.createClass({
	displayName: 'CreatableTAG',
	propTypes: {
		hint: React.PropTypes.string,
		label: React.PropTypes.string
	},
	getInitialState (){
		return {
			multi: true,
			multiValue: [],
			value: undefined
		};
	},
	handleOnChange (value){
		const { multi } = this.state;
		if (multi) {
			this.setState({multiValue: value});
		}else{
			this.setState({value});
		}
	},
	render (){
		const { multi, multiValue, value } = this.state;
		return(
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select.Creatable
					multi={multi}
					onChange={this.handleOnChange}
					value={multi ? multiValue : value}
				/>
			</div>
		);
	}
});


const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

const FormConductor = (props) => {
	const { handleSubmit, pristine, reset, submitting } = props
	return(
		<form onSubmit={handleSubmit}>
			<div>
			<br/>
			<div>
				<center>
					<tr>INFORMACION CONDUCTOR</tr>
				</center>
			</div>

				<label>Last name</label>
				<div>
					<Field name="last_name" component="input" type="text"/>
				</div>
			</div>

			<div>
				<label>First name*</label>
				<div>
					<Field name="first_name" component={ renderField } type="text"/>
				</div>
			</div>

			<div>
				<label>Middle name</label>
				<div>
					<Field name="middle_name" component="input" type="text"/>
				</div>
			</div>

			<div>
				<label>Tracker</label>
				<div>
					<Field name="tracker" component={ CreatableTR } />
				</div>
			</div>

			<div>
				<label>Department</label>
				<div>
					<Field name="department" component={ CreatableDEP } />
				</div>
			</div>

			<div>
				<label>Hardware key</label>
				<div>
					<Field name="hardware_key" component="input" type="text"/>
				</div>
			</div>

			<div>
				<label>Tags</label>
				<div>
					<Field name="tags" component={ CreatableTAG }/>
				</div>
			</div>
			<FormInfocontacto/>
			<FormLicenciaConductor/>

			<div>
        		<button type="submit" disabled={pristine || submitting}>Submit</button>
        		<button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      		</div>
		</form>
	)
}
export default reduxForm ({
	form: 'simple',
	validate
})(FormConductor);