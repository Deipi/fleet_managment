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
				<Input { ...input } style={ styleError }  name={ input.name } id="inputs" type={type}placeholder={placeholder}  />
			</InputGroup>
		</div>
	);
};

const FormInfocontacto=(props)=>{
	const { handleSubmit } = props
	return(
		<Container>
			<Card block>
				<Row>
					<Col className="col-sm-12">
						<center>
							<br/><tr>CONTACT INFO</tr><br/>
						</center>

						<Field
							name="phone"
							component={renderField}
							type="number"
							min="10"
							placeholder="Phone"
							label="Phone"
						/>

						<Field
							name="email"
							component={renderField}
							type="email"
							placeholder="E-mail"
							label="E-mail"
						/>
					</Col>
				</Row>
			</Card>
		</Container>
	)
}
export default FormInfocontacto;