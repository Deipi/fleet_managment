import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { Input, Row, Col, Container, Button, InputGroup, InputGroupAddon } from 'reactstrap'

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
		<Input { ...input } style={ styleError }  name={ input.name } id="inputs" type={type} placeholder={label} />
		</InputGroup>
		</div>
	);
};

const SimpleFormContac = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
  	<Container>

			<form onSubmit={handleSubmit}>
				<Row>

					<Col className="offset-5">
						<tr>CONTACT</tr><br/>
					</Col>

					<Col className="col-sm-12">
						<Row>
							<Col className="col-sm-6">
								<div>
									<label>ABOUT US?</label>
									<div>
										<p> DEIPI is an application development agency dedicated to providing
										Internet e-business solutions for companies looking to reduce costs,
										increase revenue and improve business competitiveness.</p>
									</div>
								</div>
								<div>
									<label>SERVICES</label>
									<div>
										<p> We offer information technology services focused on internet and
										mobile devices, in the form of SaaS (Software as a Service) and
										development of projects tailored to the needs of your organization.
										We have a proprietary platform that allows us to develop new projects
										on the internet in a modular way and with specific functionality.</p>
									</div>
								</div>
							</Col>

							<Col className="col-sm-6">

								  	<InputGroup>
								  	<InputGroupAddon>First Name</InputGroupAddon>
									  	<Field
									  		name="nombre"
									  		component="input"
									  		type="text"
									  	/>

									</InputGroup>
							  		<br/>

									<InputGroup>
									<InputGroupAddon>Last Name</InputGroupAddon>

										  	<Field
										  		name="apellidos"
										  		component="input"
										  		type="text"
										  	/>

									</InputGroup>
							  		<br/>

									<InputGroup>
									<InputGroupAddon>Email</InputGroupAddon>
										  <Field
										  	name="email"
										  	component="input"
										  	type="email"
										  />

									</InputGroup>
						  			<br/>

							 		<InputGroup>
								  	<InputGroupAddon>Phone</InputGroupAddon>
										  	<Field
										  		name="telefono"
										  		component="input"
										  		type="telefono"
										  	/>
									</InputGroup>
							  		<br/>

							  		<InputGroup>
								  	<InputGroupAddon>Commentary</InputGroupAddon>
										  	<Field
										  		name="comentario"
										  		component="textarea"
										  	/>
									</InputGroup>
							  	<br/>

							  	<Col className="col-sm-12">
									<Button type="submit" color="primary" disabled={pristine || submitting}>Save</Button>
									<Button type="button" color="primary" disabled={pristine || submitting} onClick={reset}>Clear</Button>
								</Col>
							</Col>
						</Row>
					</Col>
				</Row>
			</form>
	</Container>
  )
}

export default reduxForm({
  form: 'simpleContac'  // a unique identifier for this form
})(SimpleFormContac)