import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable'
import { fetchGeocercas } from '../actions/indexGeocercas';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import DrawingManager from 'react-google-maps/lib/drawing/DrawingManager';

import Mapa from './GeocercasMon';

class MapContainer extends Component {

	render() {

		return (

			<div style={{ height: '60vh' }}>

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
