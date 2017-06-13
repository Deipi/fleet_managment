import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { Input, Row, Col, Container, Button, InputGroup, InputGroupAddon } from 'reactstrap'

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
										<p style={{ textalign:'justify'}}> DEIPI is an application development agency dedicated to providing
										Internet e-business solutions for companies looking to reduce costs,
										increase revenue and improve business competitiveness.</p>
									</div>
								</div>
								<div>
									<label>SERVICES</label>
									<div>
										<p style={{ textalign:'justify'}}> We offer information technology services focused on internet and
										mobile devices, in the form of SaaS (Software as a Service) and
										development of projects tailored to the needs of your organization.
										We have a proprietary platform that allows us to develop new projects
										on the internet in a modular way and with specific functionality.</p>
									</div>
								</div>
							</Col>

							<Col className="col-sm-6">
							  	<Field
							  		name="nombre"
							  		component={renderField}
							  		type="text"
							  		label="First Name"
							  		placeholder="First Name"
							  	/><br/>

							  	<Field
							  		name="apellidos"
							  		component={renderField}
							  		type="text"
							  		label="Last Name"
						  			placeholder="Last Name"
							  	/><br/>

							  	<Field
								  	name="email"
								  	component={renderField}
								  	type="email"
								  	label="E-mail"
							  		placeholder="E-mail"
							  	/><br/>

							  	<Field
							  		name="telefono"
							  		component={renderField}
							  		type="telefono"
							  		label="Phone"
						  			placeholder="Phone"
							  	/><br/>

							  	<Field
							  		name="comentario"
							  		component="textarea"
							  		label="Commentary"
						  			placeholder="Commentary"
							  	/><br/><br/>

							  	<Col className="col-sm-12 offset-4">
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