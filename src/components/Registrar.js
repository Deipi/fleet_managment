import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import validate from '../validate'
import { Link } from 'react-router-dom';
import SAVE from '../actions/indexRegistrar'

import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Container, Row, Col, Button, Card } from 'reactstrap'

const renderField = ({ onChangeAction, index, input, className,placeholder, label, type, meta: { touched, error } }) => {
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
				<InputGroupAddon> <i className={className}/></InputGroupAddon>
				<Input placeholder={ placeholder }{ ...input } style={ styleError }  name={ input.name } id="inputs" type={type}  />
			</InputGroup>
		</div>
	);
};

const SimpleFormRegistrar = (props) => {
  const { handleSubmit, pristine, reset, submitting, actionSubmit } = props
  return (
	<Container>
	 <Col className="col-sm-12">
			<form onSubmit={handleSubmit(actionSubmit)}>
				<Row>
					<div className="col-sm-6">
						<h2>Cree su cuenta</h2>
						<br/>
						<div className="col-sm-12">
							<i className="fa fa-envelope fa-4x"/>
								<p style={{ position:'absolute', margin:'-3.2em 5em'}}> <strong>Ingrese</strong>  su correo electrónico y una contraseña segura para iniciar sesión.</p>
						</div>
					</div>
					<div className="col-sm-6">
						<Card block>
							<div className="offset-5">
								<br/>
								<h3>REGISTER</h3><br/>
							</div>
							<Col className="col-sm-10 offset-3">
								<InputGroup>
										<Field
											name="name"
											component={renderField}
											type="text"
											placeholder="Nombre"
											label="First Name"
											className="fa fa-fw fa-user"
										/>
								</InputGroup>
								<br/>
								<InputGroup>
										<Field
											name="apellido"
											component={renderField}
											type="text"
											placeholder="Apellido"
											label="Last Name"
											className="fa fa-user-o"
										/>
								</InputGroup>
								<br/>
								<InputGroup>
										<Field
											name="telefono"
											component={renderField}
											type="telefono"
											placeholder="Telefono"
											label="Phone"
											className="fa fa-phone"
										/>
								</InputGroup>
								<br/>
								<InputGroup>
									<Field
										name="email"
										component={renderField}
										type="email"
										placeholder="Email"
										label="Email"
										className="fa fa-fw fa-envelope"
									/>
								</InputGroup>
								<br/>
								<InputGroup>
										<Field
											name="password"
											component={renderField}
											type="password"
											placeholder="Password"
											label="Password"
											className="fa fa-fw fa-key"
										/>
								</InputGroup>
								<br/>
							</Col>

							<div className="col-sm-12 offset-5">
								<Button type="submit" color="primary" onClick={()=>alert('Registrado')} disabled={pristine || submitting}>Save</Button>
							</div>
						</Card>
					</div>
				</Row>
			</form>
			</Col>
	   <br/>
	</Container>
  )
}

export default reduxForm({
  form: 'simpleRegistrar',  // a unique identifier for this form
  validate
})(SimpleFormRegistrar)