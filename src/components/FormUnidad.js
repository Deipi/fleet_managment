import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import Select from 'react-select';
import validate from '../validate'
import 'react-select/dist/react-select.css'
import SimpleFormD from './SimpleFormDimensiones';
import FormCombustible from './FormCombustible';
import FormWheelbase from './FormWheelbase';
import FormSeguro from './FormSeguro';

import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Container, Row, Col, Button } from 'reactstrap'

var CreatableTY = React.createClass({
  displayName: 'CreatableTY',
  propTypes: {
	hint: React.PropTypes.string,
	label: React.PropTypes.string
  },
  getInitialState () {
	return {
	   options: [
		  { value: 'car', label: 'Car'},
		  { value: 'bus', label: 'Bus'},
		  { value: 'special', label: 'Special'}
	   ]
	};
  },
  render () {
	const { props: { input : { onChange, value, name } } } = this;
	const { options } = this.state;
	return (
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

var CreatableTR = React.createClass({
  displayName: 'CreatableTR',
  propTypes: {
	hint: React.PropTypes.string,
	label: React.PropTypes.string
  },
  getInitialState () {
	return {
	   optionsTR: [
	  { value: 'no tracker', label: 'No Tracker'},
	  { value: 'pepe', label: 'Pepe'},
	  { value: 'luis', label: 'Luis'},
	  { value: 'martin', label: 'Martin'}
	 ]
	};
  },
  render () {
	const { props: { input : { onChange, value, name } } } = this;
	const { optionsTR } = this.state;
	return (
	  <div className="section">
		<h3 className="section-heading">{this.props.label}</h3>
		<Select.Creatable
		  options={optionsTR}
		  name={name}
		  onChange={onChange}
		  value={value}
		/>
	  </div>
	);
  }
});

var CreatableGA = React.createClass({
  displayName: 'CreatableGA',
  propTypes: {
	hint: React.PropTypes.string,
	label: React.PropTypes.string
  },
  getInitialState () {
	return {
	  optionsGA: [
	  { value: 'garage', label: 'Garage'},
	  { value: 'no garage', label: 'No Garage'}
	 ]
	};
  },
  render () {
	const { props : { input : { onChange, value, name } } } = this;
	const { optionsGA } = this.state;
	return (
	  <div className="section">
		<h3 className="section-heading">{this.props.label}</h3>
		<Select.Creatable
		  options={optionsGA}
		  name={name}
		  onChange={onChange}
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
	const { onChangeAction } = this.props;

	onChangeAction(value);
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
  render (){
	const { props: { input : { onChange, value, name } } } = this;
	const { optionsDEP } = this.state;
	return(
	  <div className="section">
		<h3 className="section-heading">{this.props.label}</h3>
		<Select.Creatable
		  options={optionsDEP}
		  name={name}
		  onChange={onChange}
		  value={value}
		/>
	  </div>
	);
  }
});

  var CreatableSTA=React.createClass({
  displayName: 'CreatableSTA',
  propTypes: {
	hint: React.PropTypes.string,
	label: React.PropTypes.string
  },
  getInitialState(){
	return{
	  optionsSTA: [
		{ value: 'on', label: 'Online'},
		{ value: 'off', label: 'Offline'}
	  ]
	};
  },
  render (){
	const { props: { input : { onChange, value, name } } } = this;
	const { optionsSTA } = this.state;
	return(
	  <div className="section">
		<h3 className="section-heading">{this.props.label}</h3>
		<Select
		  options={optionsSTA}
		  name={name}
		  onChange={onChange}
		  value={value}
		/>
	  </div>
	);
  }
});

 var CreatableFLE=React.createClass({
  displayName: 'CreatableFLE',
  propTypes: {
	hint: React.PropTypes.string,
	label: React.PropTypes.string
  },
  getInitialState(){
	return{
	  optionsSTA: [
		{ value: 'and', label: 'Andres'},
		{ value: 'ser', label: 'Sergio'},
		{ value: 'man', label: 'Manuel'}
	  ]
	};
  },
  render (){
	const { props: { input : { onChange, value, name } } } = this;
	const { optionsSTA } = this.state;
	return(
	  <div className="section">
		<h3 className="section-heading">{this.props.label}</h3>
		<Select
		  options={optionsSTA}
		  name={name}
		  onChange={onChange}
		  value={value}
		/>
	  </div>
	);
  }
});

const format = value => {
  if(value && parseInt(value.split(' ')[0]) >0 && value.includes('Km/h')){
	return value.split(' ')[0] + value.split(' ')[2]+ ' Km/h ';
  }
  if(value){
	return value + ' Km/h ';
  }
}

const renderField = ({ onChangeAction, index, input, label, type, meta: { touched, error } }) => {
	const styleError = {};
	let errorSpan = null;

	const ERROR_STYLE = {
		position: 'absolute',
		zIndex: '3',
		right: '11px',
		top: '-9px',
	};

	if (touched && error) {
		errorSpan = <span className="badge badge-danger" style={ ERROR_STYLE }>{ error }</span>;
		styleError.borderColor = 'darkred';
	}
	return(
		<div style={ { position: 'relative' } }>
			{ errorSpan }
			<InputGroup>
				<InputGroupAddon> {label}</InputGroupAddon>
				<Input { ...input } style={ styleError }  name={ input.name } id="inputs" type={type}  />
			</InputGroup>
		</div>
	);
};


const FormUnidadComponent = (props) => {
	const { onChangeAction, handleSubmit, pristine, reset, submitting, actionSubmit } = props

	return (
	<Container>
		<form onSubmit={ handleSubmit(actionSubmit) }>
			<Row>
				<Col className="col-sm-6">

					<center>
						<br/><br/><tr>SUMMARY</tr><br/>
					</center>

					<InputGroup>
						<Col className="col-sm-12">
							<Field
								name="label"
								component={renderField}
								type="text"
								label="label*"
							/>
						</Col>
					</InputGroup>

					<div>
						<Col className="col-sm-12">
							<label>Tracker</label>
							<Field
								name="tracker"
								component={ CreatableTR }
							/>
						</Col>
					</div>

					<div>
						<Col className="col-sm-12">
							<label>Department</label>
							<Field
								name="department"
								component={ CreatableDEP }
							/>
						</Col>
					</div>

					<div>
						<Col className="col-sm-12">
							<label>Status</label>
							<Field
								name="status"
								component={ CreatableSTA }
							/>
						</Col>
					</div>

					<div>
						<Col className="col-sm-12">
							<label>Fleet</label>
							<Field
								name="fleet"
								component={ CreatableFLE }
							/>
						</Col>
					</div>

					<InputGroup>
					<InputGroupAddon>Coordenadas</InputGroupAddon>
						<Field
							name="latitud"
							component="input"
							type="number"
							placeholder="Latitud"
						/>
						<Field
							name="longitud"
							component="input"
							type="number"
							placeholder="Longitud"
						/>
					</InputGroup>


					<div>
						<Col className="col-sm-12">
							<label>Garage</label>
							<Field
								name="garage"
								component={ CreatableGA }
							/>
						</Col>
					</div>

					<InputGroup>
						<InputGroupAddon>Model</InputGroupAddon>
						<Field
							name="model"
							component="input"
							type="text"
							placeholder="Model"
						/>
					</InputGroup>

					<div>
						<Col className="col-sm-12">
							<label>Type*</label>
							<Field
								name="type"
								component={ CreatableTY }
							/>
						</Col>
					</div>

					<InputGroup>
						<InputGroupAddon>Vehicle registration plate</InputGroupAddon>
						<Field
							name="vehicle_registration_plate"
							component="input"
							type="text"
							placeholder="Vehicle"
						/>
					</InputGroup>

					<InputGroup>
						<InputGroupAddon>VIN</InputGroupAddon>
						<Field
							name="vin"
							component="input"
							type="text"
							placeholder="VIN"
						/>
					</InputGroup>

					<InputGroup>
						<InputGroupAddon>Chassis number</InputGroupAddon>
						<Field
							name="chassis_number"
							component="input"
							type="text"
							placeholder="Chassis number"
						/>
					</InputGroup>

					<InputGroup>
						<Col className="col-sm-12">
							<Field
								name="permited_speed"
								component={renderField}
								type="text"
								format={format}
								label="Permited speed"
								placeholder="Permited speed"
							/>
						</Col>
					</InputGroup>

					<div>
						<Col className="col-sm-12">
							<label>Tags</label>
							<Field
								name="tags"
								component={ CreatableTAG }
								onChangeAction={ onChangeAction }
							/>
						</Col>
					</div>
			  	</Col>

			  	<Col className="col-sm-6">
					<SimpleFormD/><br/>
					<FormCombustible/><br/>
					<FormWheelbase/><br/>
					<FormSeguro/><br/>
		  		</Col>


			   	<Col className="offset-5">
					<Button type="submit" color="primary" disabled={pristine || submitting}>Save</Button>
					<Button type="button" color="primary" disabled={pristine || submitting} onClick={reset}>Clear</Button>
			  	</Col><br/><br/><br/>
			</Row>
		</form>
	</Container>
  )
}

export default reduxForm({
  form: 'formUnidad',
  validate,
})(FormUnidadComponent);

export const FormUnidad = reduxForm({
  form: 'formUnidad',
  validate,
})(FormUnidadComponent);