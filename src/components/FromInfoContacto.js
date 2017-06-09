import React from 'react'
import { Field } from 'redux-form/immutable'

import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Container, Row, Col, Card } from 'reactstrap'

const FormInfocontacto=(props)=>{
	const { handleSubmit } = props
	return(
		<Container>
			<Card block>
				<Row>
					<Col className="col-sm-12">
						<center>
							<br/><tr>CONTACT INFO</tr><br/>
						</center>

						<InputGroup>
							<InputGroupAddon>Phone</InputGroupAddon>
							<Field
								name="phone"
								component="input"
								type="number"
								min="10"
								placeholder="Phone"
							/>
						</InputGroup>

						<InputGroup>
							<InputGroupAddon>E-mail</InputGroupAddon>
							<Field
								name="email"
								component="input"
								type="email"
								placeholder="E-mail"
							/>
						</InputGroup>
					</Col>
				</Row>
			</Card>
		</Container>
	)
}
export default FormInfocontacto;