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
						<tr>CONTACTO</tr><br/>
					</Col>

					<Col className="col-sm-12">
						<Row>
							<Col className="col-sm-6">
								<div>
									<label>¿QUIÉNES SOMOS?</label>
									<div>
										<p> DEIPI es una agencia de desarrollo de aplicaciones en Internet dedicada a
										proveer soluciones de e-business para empresas que buscan reducir sus costos,
										aumentar sus ingresos y mejorar su competitividad empresarial.</p>
									</div>
								</div>
								<div>
									<label>SERVICIOS</label>
									<div>
										<p> Ofrecemos servicios de tecnologías de información enfocadas a internet y disposivos móviles,
										en la modalidad de SaaS (Software as a Service) y desarrollo de proyectos a la medida de las
										necesidades de su organización.
										Contamos con una plataforma propietaria que nos permite el desarrollo de nuevos proyectos en internet
										de forma modular y con funcionalidad especifica.</p>
									</div>
								</div>
							</Col>

							<Col className="col-sm-6">

								  	<InputGroup>
								  	<InputGroupAddon>Nombre</InputGroupAddon>
									  	<Field 
									  		name="nombre"
									  		component="input"
									  		type="text"
									  	/>

									</InputGroup>
							  		<br/>

									<InputGroup>
									<InputGroupAddon>Apellidos</InputGroupAddon>

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
								  	<InputGroupAddon>Telefono</InputGroupAddon>
										  	<Field
										  		name="telefono"
										  		component="input"
										  		type="telefono"
										  	/>
									</InputGroup>
							  		<br/>

							  		<InputGroup>
								  	<InputGroupAddon>Comentario</InputGroupAddon>
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