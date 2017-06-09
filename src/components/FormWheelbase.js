import React from 'react'
import { Field } from 'redux-form/immutable'
import 'react-select/dist/react-select.css'

import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Container, Row, Col, Card } from 'reactstrap'

const minimo = value => parseFloat(value.split(' ')[0]) > 0 ? value: -1 * parseFloat(value.split(' ')[0])

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

const FormWheelbase=(props)=>{
	const { handleSubmit } = props
	return (
		<Container>
			<Card block>
				<Row>
					<Col className="col-sm-12">
						<center>
							<br/><tr>WHEELBASE</tr><br/>
						</center>

						<div>
							<label>Wheel arrangement</label>
							<Field
								name="wheel_front"
								component="input"
								type="number"
								normalize={ minimo}
								label="Wheel arrangement"
							/>X
							<Field
								name="wheel_rear"
								component="input"
								type="number"
								normalize={minimo}
							/>
						</div>

						<InputGroup>
							<InputGroupAddon>Tyre Size</InputGroupAddon>
							<Field
								name="tyre_size"
								component="input"
								type="text"
								placeholder="Tyre Size"
							/>
						</InputGroup>

						<InputGroup>
							<Col className="col-sm-12">
								<Field
									name="tyres_number"
									component={ renderField }
									type="number"
									normalize={ minimo }
									label="Tyres Number"
								/>
							</Col>
						</InputGroup>
					</Col>
				</Row>
			</Card>
		</Container>
	)
}
export default FormWheelbase