import React from 'react';
import { Container, CardHeader,Card, Button, CardTitle, CardText, Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';

export const Vehicles = props => (
	<Container className="mt-2">
		<Col className="col-sm-6 offset-3">
			<Card>
			<CardHeader className="text-center">DESCRIPTION </CardHeader>	
				<div className="text-center mt-1"> { props.label } </div>
				<div className="text-center mt-1"> { props.model } </div>
				<div className="text-center mt-1"> { props.tracker } </div>
				<div className="text-center mt-1"> { props.vehicle_registration_plate } </div>
				<div className="text-center mt-1"> { props.type } </div>
			</Card>
		</Col>
	</Container>
);

export default Vehicles;
