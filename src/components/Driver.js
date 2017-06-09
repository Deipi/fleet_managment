import React from 'react';
import { Container, Card, Button, CardTitle, CardText, Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';

export const Driver = props => (
	<Container>
		<Card block>
			<Row>
				<Col className="col-sm-6 offset-3">
					<div> <center><label>DESCRIPTION</label></center> </div>
					<div> <center>{ props.last_name }</center> </div>
					<div> <center>{ props.first_name }</center> </div>
					<div> <center>{ props.tracker }</center> </div>
					<div> <center>{ props.phone }</center> </div>
					<div> <center>{ props.email }</center> </div>
					<div> <center>{ props.hardware_key }</center> </div>
					<div> <center>{ props.driver_license_number }</center> </div>
				</Col>
			</Row>
		</Card>
	</Container>
);

export default Driver;