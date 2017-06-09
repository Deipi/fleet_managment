import React, { Component } from 'react'
import { Field } from 'redux-form/immutable'
import 'react-select/dist/react-select.css'

import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Container, Row, Col, Card } from 'reactstrap'

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

const FormSeguro=(props)=>{
	const { handleSubmit } = props
	return(
		<Container>
			<Card block>
				<Row>
					<Col className="col-sm-12">
						<center>
							<br/><tr>INSURANCE</tr><br/>
						</center>

						<InputGroup>
							<InputGroupAddon>Insurance policy number</InputGroupAddon>
							<Field
								name="insurance_policy_number"
								component="input"
								type="text"

							/>
						</InputGroup>

						<InputGroup>
							<InputGroupAddon>Insurance valid</InputGroupAddon>
							<Field
								name="insurance_valid"
								component={DataField}
							/>
						</InputGroup>

						<InputGroup>
							<InputGroupAddon>Insurance 2 policy number</InputGroupAddon>
							<Field
								name="insurance_2_policy_number"
								component="input"
								type="text"
							/>
						</InputGroup>

						<InputGroup>
							<InputGroupAddon>Insurance 2 valid</InputGroupAddon>
							<Field
								name="insurance_2_valid"
								component={DataField}
							/>
						</InputGroup>
					</Col>
				</Row>
			</Card>
		</Container>
	)
}
export default FormSeguro;