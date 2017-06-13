import React from 'react'
import { Field } from 'redux-form/immutable'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Container, Row, Col, Button, Card } from 'reactstrap'

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

const FormLicenciaConductor=(props)=>{
	const { handleSubmit }=props
	return(
		<Container>
			<Card block>
				<Row>
					<Col className="col-sm-12">
						<center>
							<br/><tr>DRIVER LICENSE</tr><br/>
						</center>

							<Field
								name="driver_license_number"
								component={renderField}
								type="number"
								placeholder="Driver license number"
								label="Driver license number"
							/>

							<Field
								name="driver_license_class"
								component={renderField}
								type="text"
								placeholder="Driver license class"
								label="Driver license class"
							/>

						<InputGroup>
							<InputGroupAddon>Expiration date</InputGroupAddon>
							<Field
								name="expiration_date"
								component={DataField}
								placeholder="Expiration date"
							/>
						</InputGroup>
					</Col>
				</Row>
			</Card>
		</Container>
	)
}
export default FormLicenciaConductor;