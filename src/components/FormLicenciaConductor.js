import React from 'react'
import { Field } from 'redux-form/immutable'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Container, Row, Col, Button, Card } from 'reactstrap'

const DataField=({input, meta:{touched, error}, ...rest})=>(
	<div>
		<DatePicker
		{...input}
		{...rest}
		selected={input.value ? moment(input.value) : null}
		dateFormat="YYYY-MM-DD"
		/>
	</div>
);

const FormLicenciaConductor=(props)=>{
	const { handleSubmit }=props
	return(
		<Container>
			<Card block>
				<Row>
					<Col className="col-sm-12">
						<center>
							<br/><tr>DRIVER LICENSE</tr><br/>
						</center>

						<InputGroup>
							<InputGroupAddon>Driver license number</InputGroupAddon>
							<Field
								name="driver_license_number"
								component="input"
								type="number"
								placeholder="Driver license number"
							/>
						</InputGroup>

						<InputGroup>
							<InputGroupAddon>Driver license class</InputGroupAddon>
							<Field
								name="driver_license_class"
								component="input"
								type="text"
								placeholder="Driver license class"
							/>
						</InputGroup>

						<InputGroup>
							<InputGroupAddon>Expiration date</InputGroupAddon>
							<Field
								name="expiration_date"
								component={DataField}
								placeholder="Expiration date"
							/>
						</InputGroup>
					</Col>
				</Row>
			</Card>
		</Container>
	)
}
export default FormLicenciaConductor;