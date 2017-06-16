import React from 'react';
import { Container,CardHeader, Card, Button, CardTitle, CardText, Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';

export const Driver = props => (
	<Container className="mt-2">
		<Col className="col-sm-6 offset-3">
			<Card>
			<CardHeader className="text-center">DESCRIPTION </CardHeader>	
				<div className="text-center mt-1"> { props.last_name } </div>
				<div className="text-center mt-1"> { props.first_name } </div>
				<div className="text-center mt-1"> { props.tracker } </div>
				<div className="text-center mt-1"> { props.phone } </div>
				<div className="text-center mt-1"> { props.email } </div>
				<div className="text-center mt-1"> {  props.hardware_key } </div>
				<div className="text-center mt-1"> { props.driver_license_number } </div>

			</Card>
		</Col>
	</Container>
);

export default Driver;