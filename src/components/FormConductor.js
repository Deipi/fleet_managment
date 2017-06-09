import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import validate from '../validate'
import FormInfocontacto from './FromInfoContacto'
import FormLicenciaConductor from './FormLicenciaConductor'

import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Container, Row, Col, Button } from 'reactstrap'

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
	render (){
		const { props: { input : { onChange, value, name } } } = this;
		const { optionsTR } = this.state;
		return(
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


const FormConductorComponent = (props) => {
	const { onChangeAction, handleSubmit, pristine, reset, submitting, actionSubmit } = props
	return(
		<Container>
			<form onSubmit={handleSubmit(actionSubmit)}>
				<Row>
					<Col className="col-sm-6">
						<center>
							<br/><br/><tr>SUMMARY</tr><br/>
						</center>

						<InputGroup>
							<InputGroupAddon>Last Name</InputGroupAddon>
							<Field
								name="last_name"
								component="input"
								type="text"
								placeholder="Last Name"
							/>
						</InputGroup>

						<InputGroup>
							<Col className="col-sm-12">
								<Field
									name="first_name"
									component={ renderField }
									type="text"
									label="First Name"
								/>
							</Col>
						</InputGroup>

						<InputGroup>
							<InputGroupAddon>Middle Name</InputGroupAddon>
							<Field
								name="middle_name"
								component="input"
								type="text"
								placeholder="Middle Name"
							/>
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

						<InputGroup>
							<InputGroupAddon>Hardware key</InputGroupAddon>
							<Field
								name="hardware_key"
								component="input"
								type="text"
								placeholder="Hardware Key"
							/>
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
						<FormInfocontacto/><br/>
						<FormLicenciaConductor/><br/>
					</Col>

						<Col className="offset-5"><br/>
			        		<Button type="submit" color="primary" disabled={pristine || submitting}>Save</Button>
			        		<Button type="button" color="primary" disabled={pristine || submitting} onClick={reset}>Clear</Button>
			      		</Col>
			    </Row>
			</form>
		</Container>
	)
}
export default reduxForm ({
	form: 'formDriver',

	validate,
})(FormConductorComponent);

export const FormConductor = reduxForm({
	form: 'formDriver',
	validate,
})(FormConductorComponent)

