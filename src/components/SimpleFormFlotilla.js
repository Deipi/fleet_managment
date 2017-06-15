import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import validate from '../validate'
import { Container, Card, Button, CardTitle, CardText, Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';

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

const SimpleFormF = (props) => {
	const { handleSubmit, pristine, reset, submitting, actionSubmit } = props
	return (
		<Container style={{zIndex:0}}>
				<Card block>
					<form onSubmit = {handleSubmit(actionSubmit)}>
						<Row>

							<Col className="offset-5">
								<tr>FLOTILLA</tr><br/>
							</Col>

							<Col className="col-sm-10 offset-3">

								<InputGroup>
									<Col className="col-sm-6">
									<Field
										name="nombre"
										component={ renderField }
										type="text"
										label="Name"
									/>
									</Col>
								</InputGroup>

								<br/>

								<InputGroup>
									<Col className="col-sm-6">
									<Field name="supervisor" component={ renderField } type="text" label="Supervisor"/>
									</Col>
								</InputGroup>

								<br/>

								<InputGroup>
									<Col className="col-sm-6">
									<Field name="garage" component={ renderField } type="text" label="Garage"/>
									</Col>
								</InputGroup>

								<br/>

							</Col>

						  <Col className="offset-5">
			        		<Button type="submit" color="primary" disabled={pristine || submitting}>Save</Button>

			        		<Button type="Button" color="primary" disabled={pristine || submitting} onClick={reset}>Clear</Button>
			      		  </Col>

			      		</Row>
					</form>
				</Card>

			</Container>

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
