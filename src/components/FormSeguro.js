import React, { Component } from 'react'
import { Field } from 'redux-form/immutable'
import 'react-select/dist/react-select.css'

import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Container, Row, Col, Card } from 'reactstrap'

const DataField=({input, meta:{touched, error}, ...rest})=>(
	<div>
		<DatePicker
		{...input}
		{...rest}
		selected={input.value ? moment(input.value) : null}
		dateFormat="YYYY-MM-DD"
		className="form-control largo"
		/>
	</div>
);

const renderField = ({ onChangeAction, index, input, label, type, placeholder, meta: { touched, error } }) => {
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
				<Input { ...input } style={ styleError }  name={ input.name } id="inputs" type={type}placeholder={placeholder}  />
			</InputGroup>
		</div>
	);
};

const FormSeguro=(props)=>{
	const { handleSubmit } = props
	return(
		<Container>
			<Card block>
				<Row>
					<Col className="col-sm-12">
						<center>
							<br/><tr>INSURANCE</tr><br/>
						</center>

							<Field
								name="insurance_policy_number"
								component={renderField}
								type="text"
								label="Insurance policy number"
								placeholder="Insurance policy number"
							/>

						<InputGroup>
							<InputGroupAddon>Insurance valid</InputGroupAddon>
							<Field
								name="insurance_valid"
								component={DataField}
							/>
						</InputGroup>

							<Field
								name="insurance_2_policy_number"
								component={renderField}
								type="text"
								label="Insurance 2 policy number"
								placeholder="Insurance 2 policy number"
							/>

						<InputGroup>
							<InputGroupAddon>Insurance 2 valid</InputGroupAddon>
							<Field
								name="insurance_2_valid"
								component={DataField}
							/>
						</InputGroup>
					</Col>
				</Row>
			</Card>
		</Container>
	)
}
export default FormSeguro;