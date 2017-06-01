import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import { Row, Col, Container } from 'reactstrap'

const SimpleFormContac = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
	<form onSubmit={handleSubmit}>
		<br/>
		<div>
			<center>
				<tr>CONTACTO</tr><br/>
			</center>
		</div>
		<Row>
			<Col className="col-sm-12">
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
					<Col className="col-sm-6">
					  	<div>
							<label>Nombre</label>
							<div>
							  	<Field name="nombre" component="input" type="text" placeholder="Nombre"/>
							</div>
					  	</div>
				  	</Col>
				  	<Col className="col-sm-6">
						<div>
							<label>Apellidos</label>
							<div>
							  	<Field name="apellidos" component="input" type="text" placeholder="Apellidos"/>
							</div>
					  	</div>
				  	</Col>
				  	<Col className="col-sm-6">
						<div>
							<label>Email</label>
							<div>
							  <Field name="email" component="input" type="email" placeholder="Email"/>
							</div>
					  	</div>
			  		</Col>
				 	<Col className="col-sm-6">
					  	<div>
							<label>Telefono</label>
							<div>
							  	<Field name="telefono" component="input" type="telefono" placeholder="Telefono"/>
							</div>
					  	</div>
				  	</Col>
				  	<Col className="col-sm-12">
					  	<div>
							<label>Comentario</label>
							<div>
							  	<Field name="comentario" component="textarea"/>
							</div>
					  	</div>
				  	</Col>
				  	<Col className="col-sm-12">
					  	<div>
							<button type="submit" disabled={pristine || submitting}>Enviar</button>
							<button type="button" disabled={pristine || submitting} onClick={reset}>Reestablecer Valores</button>
					  	</div>
					 </Col>
				</Col>
			</Col>
		</Row>
	</form>
  )
}

export default reduxForm({
  form: 'simpleContac'  // a unique identifier for this form
})(SimpleFormContac)