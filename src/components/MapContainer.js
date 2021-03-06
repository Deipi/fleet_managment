import React, { Component } from 'react';
import Map from './Monitoreo';
import Griddle, { ColumnDefinition, RowDefinition, plugins } from 'griddle-react';
import FilterMap from './FilterMap'
import FilterMapFlotilla from './FilterMapFlotilla'
import FilterMapState from './FilterMapState'
import { fetchEmpleados, getVehicles } from '../actions/FilterMap'
import { connect } from 'react-redux';
import DataTable from '../containers/MarkersList';
import FilterMapUnit from './FilterMapUnit'
import { Container, Row, Col, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { fetchItems } from '../actions/Filters';

const NewLayout = ({ Table }) => (
	<div>
		<Table/>
	</div>
);

class MapContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			markers: [],
			allMarkers: [],
 		};
 		this.onChangeD = this.onChangeD.bind(this);
 		this.onChangeF = this.onChangeF.bind(this);
 		this.onChangeS = this.onChangeS.bind(this);
 		this.monitorAction = this.monitorAction.bind(this);
	}

	componentWillMount() {
		const { dispatch } = this.props;
		dispatch(getVehicles());
	}

	monitorAction(id) {
		
		const { dispatch } = this.props;
		const markersFilter = this.state.allMarkers.filter(marker => marker.item.get('id') === id );

		this.setState({ markers: markersFilter });

		dispatch({
			type: 'INITIAL_MONITOR',
			payload: id,
		});
	}

	onChangeD(event) {
		const { target: { value, name, } } = event;
		const markersFilter = this.state.allMarkers.filter(marker => marker.item.getIn([ 'department', 'label'] ) === value);
		this.setState({ markers: markersFilter });
	}

	onChangeF(event){
		const { target: { value, name } } = event;
		const markersFilterF = this.state.allMarkers.filter(marker => marker.item.getIn([ 'fleet', 'label' ] ) === value);
		this.setState({ markers: markersFilterF });
	}

	onChangeS(event){
		const { target: { value, name } } = event;
		const markersFilterS = this.state.allMarkers.filter(marker => marker.item.getIn([ 'status', 'label' ] ) === value);
		this.setState({ markers: markersFilterS });
	}

	onClickFilter(){
		const { props: { dispatch }, state: { filter } } = this;
		dispatch(fetchEmpleados(filter));
	}

	componentWillReceiveProps(nextProps) {

		const { vehicles, currentVehicle } = nextProps;
		const { dispatch } = this.props;

		if (currentVehicle.get('monitorID') && currentVehicle.get('monitorCounter') < 15) {
			setTimeout(() => dispatch({
				type: 'MONITOR_COUNTER',
				payload: currentVehicle.get('monitorCounter') + 1,
			}), 8000);

			const vehicle = vehicles.find(v => v.get('id') === currentVehicle.get('monitorID'));
			const lat = vehicle.getIn([ 'latitud' ]).toFixed(3) + currentVehicle.get('monitorCounter');
			const lng = vehicle.getIn([ 'longitud' ]).toFixed(3) + currentVehicle.get('monitorCounter');

			const markers = [
				{
					position: {
					lat: parseFloat(lat),
					lng: parseFloat(lng),
					},
					title: 'Monitor...',
					key: currentVehicle.get('monitorCounter'),
					icon: {
						path: window.google.maps.Marker,
						scale: 3,
						fillColor: '#000080',
						strokeColor: '#000080',
						fillOpacity: 1,
						strokeOpacity: 1,
					},
				}
			]
			this.setState({ markers });
		}

		const markers = vehicles.map((item, index) => {

			return {
				//elementos del API
				position: {
					lat: item.getIn([ 'latitud' ]),
					lng: item.getIn([ 'longitud' ]),
				},
				title: item.getIn(['tracker','label']),
				key: index,
				icon: {
					path: window.google.maps.Marker,
					scale: 3,
					fillColor: '#000080',
					strokeColor: '#000080',
					fillOpacity: 1,
					strokeOpacity: 1,
				},
				item: item,

				onClick: () => dispatch({
					type: 'CURRENT_MARKER',
					payload: item,
				})
			};

		});

		if ((!currentVehicle.get('monitorID') && !this.state.markers.size) || vehicles.size !== this.props.vehicles.size) {
			this.setState({ markers, allMarkers: markers });
		}
		// else if (this.state.markers.size) {
		// 	debugger;
		// 	this.setState({ markers: this.state.markers });
		// }
	}

	render() {

		return (

			<div style={{ height: '60vh' }}>

				<Col className="col-sm-12">
					<Row>
						<Col sm="4">
							<Row>

									<FilterMap  mapd={this.onChangeD} onClick={this.onClickFilter}/>

									<FilterMapFlotilla  mapf={this.onChangeF} onClick={this.onClickFilter}/>

									<FilterMapState  maps={this.onChangeS}/>

							</Row>
						</Col>
						<Col className="col-sm-8" style={{zIndex:0}}>
							<FilterMapUnit />
						</Col>
					</Row>

				</Col>
				<br/>
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
				<Col className="col-sm-12" style={{zIndex:0}}>
					<DataTable monitorAction={ this.monitorAction } />
				</Col>
			</div>
		);
	}
}

export default connect(state => {
	return {
		vehicles: state.get('vehiclesStore'),
		currentVehicle: state.get('currentVehicle'),
	};
})(MapContainer)
