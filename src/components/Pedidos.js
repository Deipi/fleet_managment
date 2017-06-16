import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import './customstyle.css'

import { Container, Card, Button, CardTitle, CardText, Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';

const PedidosDate=({input, meta:{touched, error}, ...rest})=>(
	<div>
		<DatePicker
		{...input}
		{...rest}
		selected={input.value ? moment(input.value) : null}
		dateFormat="YYYY-MM-DD"
		className="form-control largo2"
		/>
	</div>
);

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

const SimpleFormPedidos = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
	<Container>
		<Card block style={{ zIndex:0 }}>
			<form onSubmit={handleSubmit}>
				<Row>
					<div className="col-sm-12 offset-4">
						<h3>MONITORING ORDERS</h3>
						<br/>
					</div>
					<br/>
					<div className="col-sm-5">
						<Field
							name="nombre"
							component={renderField}
							type="text"
							label="First Name"
							placeholder="First Name"
						/>
					</div>
					<br/>
					 <div className="col-sm-7">
						<Field
							name="apellido"
							component={renderField}
							type="text"
							label="Last Name"
							placeholder="Last Name"
						/>
					</div>
					<br/><br/>
					<div className="col-sm-4">
						<Field
							name="telefono"
							component={renderField}
							type="telefono"
							label="Phone"
							placeholder="Phone"
						/>
						</div>
					<br/>
					<div className="col-sm-4">
						<Field
							name="email"
							component={renderField}
							type="email"
							label="E-mail"
							placeholder="E-mail"
						/>
					</div>
					<br/>
					<div className="col-sm-4">
						<Field
							name="direccion"
							component={renderField}
							type="direccion"
							label="Address"
							placeholder="Address"
						/>
						</div>
						<br/><br/>
					<div className="col-sm-6">
						<Field
							name="pedido"
							component={renderField}
							type="pedido"
							label="Order"
							placeholder="Order"
						/>
						</div>
						<br/>
					<Col className="col-sm-6">
						<InputGroup>
							<InputGroupAddon>Date</InputGroupAddon>
							<Field
								name="fecha"
								component={ PedidosDate }
							/>
						</InputGroup>
					</Col>
					<br/><br/><br/>

					<div className="offset-5">
						<Button type="submit" color="primary" disabled={pristine || submitting}>Save</Button>
						<Button type="Button" color="primary" disabled={pristine || submitting} onClick={reset}>Clear</Button>
					</div>
				</Row>
			</form>
		</Card>
	</Container>
  )
}

export default reduxForm({
  form: 'simplePedidos'  // a unique identifier for this form
})(SimpleFormPedidos)