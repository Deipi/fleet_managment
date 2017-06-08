import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import validate from '../validate'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
	<div>
	    <label>{label}</label>
	    <div className={asyncValidating ? 'async-validating' : ''}>
	    	<input {...input} type={type} placeholder={label}/>
	    	{touched && error && <span>{error}</span>}
	    </div>
	</div>
)

const SimpleFormF = (props) => {
	const { handleSubmit, pristine, reset, submitting, actionSubmit } = props
	return (
		<Row>
			<Col className="col-sm-6 offset-3" >
				<Card block>
				<form onSubmit = {handleSubmit(actionSubmit)}>
				<br/>
					<div>
					<center>
					<tr>FLOTILLA</tr><br/>
					</center>
					</div>

					<div>
					<label>Name</label>
					<div>
						<Field name="nombre" component={ renderField } type="text"/>
					</div>

					<label>Supervisor</label>
					<div>
						<Field name="supervisor" component={ renderField } type="text"/>
					</div>

					<label>Garage</label>
					<div>
						<Field name="garage" component={ renderField } type="text"/>
					</div>
					</div>

					<div>
		        		<button type="submit" disabled={pristine || submitting}>Guardar</button>
		        		<button type="button" disabled={pristine || submitting} onClick={reset}>Restablecer Valores</button>
		      		</div>
				</form>
				</Card>
			</Col>
		</Row>
	)
}

export default reduxForm({
	form: 'simpleFlotilla',  // a unique identifier for this form
  	validate
})(SimpleFormF);

export const Flotilla = reduxForm({
	form: 'simpleFlotilla',  // a unique identifier for this form
  	validate
})(SimpleFormF)