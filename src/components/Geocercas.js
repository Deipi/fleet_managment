import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable'
import { fetchGeocercas } from '../actions/indexGeocercas';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import DrawingManager from 'react-google-maps/lib/drawing/DrawingManager';
import { Button, Col, Input, InputGroup, InputGroupAddon } from 'reactstrap';

import Mapa from './GeocercasMon';

class MapContainer extends Component {

	render() {

		return (

			<div style={{ height: '70vh' }}>
				<Col className="col-sm-6">
					<InputGroup>
						
					</InputGroup>
				</Col>
				<Mapa
					containerElement={
						<div style={{ height: '100%' }} />
					}
					mapElement={
						<div style={{ height: '100%' }} />
					}

				/>

			</div>
		);
	}
}

export default MapContainer;
