import React from 'react';
import { Container, Card, Button, CardTitle, CardText, Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';

export const Vehicles = props => (
	<Container>
		<Card block>
			<Row>
				<Col className="col-sm-6 offset-3">
					<div> <center><label>DESCRIPTION</label></center> </div>
					<div> <center>{ props.label }</center> </div>
					<div> <center>{ props.model }</center> </div>
					<div> <center>{ props.tracker }</center> </div>
					<div> <center>{ props.vehicle_registration_plate }</center> </div>
					<div> <center>{ props.type }</center> </div>
				</Col>
			</Row>
		</Card>
	</Container>
);

export default Vehicles;
