import React from 'react'
import { Field } from 'redux-form/immutable'

import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Container, Row, Col, Card } from 'reactstrap'

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
				<Input { ...input } style={ styleError }  name={ input.name } id="inputs" type={type} placeholder={placeholder} />
			</InputGroup>
		</div>
	);
};


const minimo = value => parseFloat(value.split(' ')[0]) > 0 ? value : -1 * parseFloat(value.split(' ')[0])

const format = value => {
	if (value && parseInt(value.split(' ')[0]) > 0 && value.includes('kg')) {
		return value.split(' ')[0] + value.split(' ')[2] + ' kg ';
	}
	if (value) {
		return value + ' kg ';
	}
}

const formato = value => {
	if (value && parseInt(value.split(' ')[0]) > 0 && value.includes('mm')) {
		return value.split(' ')[0] + value.split(' ')[2] + ' mm ';
	}
	if (value) {
		return value + ' mm ';
	}
}

const people = value => {
	if (value && parseInt(value.split(' ')[0]) > 0 && value.includes('people')) {
		return value.split(' ')[0] + value.split(' ')[2] + ' people ';
	}
	if (value) {
		return value + ' people ';
	}
}

const SimpleFormD = (props) => {
	const { handleSubmit } = props
	return (
		<Container>
			<Card block>
				<Row>
					<Col className="col-sm-12">
						<center>
							<br/><tr>DIMENSIONS</tr><br/>
						</center>

						<Col className="col-sm-12">
							<Field
								name="cargo_capacity"
								component={ renderField }
								format={ format }
								type="text"
								normalize={ minimo }
								label="Cargo Capacity"
								placeholder="Cargo Capacity"
							/>
						</Col>

						<Col className="col-sm-12">
							<Field
							    component={ renderField }
								name="cargo_l"
								format={ formato }
								type="text"
								normalize={ minimo }
								label="Cargo Bay L"
								placeholder="Cargo Bay L"
							/>
						</Col>

						<Col className="col-sm-12">
							<Field
								component={ renderField }
								name="cargo_w"
								format={ formato }
								type="text"
								normalize={ minimo }
								label="Cargo Bay W"
								placeholder="Cargo Bay W"
							/>
						</Col>

						<Col className="col-sm-12">
							<Field
								component={ renderField }
								name="cargo_h"
								format={ formato }
								type="text"
								normalize={ minimo }
								label="Cargo Bay H"
								placeholder="cargo Bay H"

							/>
						</Col>

						<Col className="col-sm-12">
							<Field
								name="number_of_passengers"
								component={ renderField }
								format={ people }
								type="text"
								normalize={ minimo }
								label="Number of passengers"
								placeholder="Number of passengers"
							/>
						</Col>
					</Col>
				</Row>
			</Card>
		</Container>
	)
}

export default SimpleFormD;