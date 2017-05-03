import React from 'react';
import Map from './Monitoreo';
import { getVehicles } from '../utils/ApiUtils.js'

export default class MapContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentWillMount() {
		const plotVehicles = () => getVehicles().then((results) => {
			const markers = results.data.map((item, index) => {
				return {
					position: {
						//elementos del API
						lat: item.address.geo.lat,
						lng: item.address.geo.lng,
					},
					draggable: true,
					animation: window.google.maps.Animation.BOUNCE,
					title: item.name && item.department,
					key: index,
					icon: {
						path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
						scale: 2,
						fillColor: '#000080',
						strokeColor: '#000080',
						fillOpacity: 1,
						strokeOpacity: 1,
					},
				};
			});
			this.setState({ markers });
		});

		plotVehicles();
		window.setInterval(plotVehicles, 2000);
	}

	render() {
		return (
			<div style={{ height: '100vh' }}>
				<Map
					containerElement={
						<div style={{ height: '100%' }} />
					}
					mapElement={
						<div style={{ height: '100%' }} />
					}
					onMapLoad={this.handleMapLoad}
					onMapClick={this.handleMapClick}
					markers={this.state.markers}
					onMarkerRightClick={this.handleMarkerRightClick}
				/>
			</div>
		);
	}
}