import React from 'react'
import { Field } from 'redux-form/immutable'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Container, Row, Col, Card } from 'reactstrap'

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

const FormCombustible=(props)=>{
	const { handleSubmit } = props
	return (
		<Container>
			<Card block>
				<Row>
					<Col className="col-sm-12">
						<center>
							<br/><tr>FUEL</tr><br/>
						</center>

						<div>
							<label>Fuel type</label>
								<Field
									name="fuel_type"
									component={ CreatableComb }
									type="text"
								/>
						</div>

						<InputGroup>
							<InputGroupAddon>Fuel Grade</InputGroupAddon>
								<Field
									name="fuel_grade"
									component="input"
									type="text"
									placeholder="Fuel Grade"
								/>
						</InputGroup>

						<InputGroup>
							<Col className="col-sm-12">
								<Field
									name="fuel_consumption"
									component={ renderField }
									format={ format }
									label="Fuel consumption"
								/>
							</Col>
						</InputGroup>

						<InputGroup>
							<Col className="col-sm-12">
								<Field
									name="tank_capacity"
									component={ renderField }
									format={ format }
									label="Tank capacity"
								/>
							</Col>
						</InputGroup>
					</Col>
				</Row>
			</Card>
		</Container>
	)
}

export default FormCombustible;