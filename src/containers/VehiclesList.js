import React, { Component } from 'react';
import { connect } from 'react-redux';
import Griddle, { ColumnDefinition, RowDefinition, plugins } from 'griddle-react';
import { fetchVehicles, FETCHED_EDITED, CLEAN_VEHICLE, deleteVehicles } from '../actions/index';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { Vehicles } from '../components/Vehicles';
import createVehicle from '../actions/index';

const NewLayout = ({ Table,Filter,Pagination }) => (
	<div>
		<Filter/>
		<Table/>
		<center><Pagination/></center>
	</div>
);

const CustomColumn = showDescription => ({value}) =>
	<button type="button" className="btn btn-default" onClick={ () => showDescription(value) }>
		<span className="fa fa-bars"></span>
	</button>;

const selector = state => {
	return {
		unidades: state.get('VehiclesList'),
	}
};

class VehiclesListComponent extends Component {
	constructor(props) {
		super(props);
		this.showDescription = this.showDescription.bind(this);
		this.deleteVehicle = this.deleteVehicle.bind(this);
		this.cleanVehicleStore = this.cleanVehicleStore.bind(this);
		this.state = {
			show: false,
			data: 0,
			edit: false,
			create: true,
			remove: false,
			group: true,
		};
	}

	componentWillMount() {
		const { props: { dispatch } } = this;
		dispatch(fetchVehicles());
	}

	showDescription(value) {
		const { props: { unidades, dispatch } } = this;
		const descriptionVehicle = unidades.filter(obj => obj.id === value).toJS()[0];
		dispatch({
			type: FETCHED_EDITED,
			payload: descriptionVehicle,
		});
		this.setState({ show: true, data: value, edit: true, create: true, remove: true, group: true });
	}

	deleteVehicle() {
		const { dispatch } = this.props;
		dispatch(deleteVehicles(this.state.data));
	}

	cleanVehicleStore() {
		const { dispatch } = this.props;
		dispatch({
			type: CLEAN_VEHICLE,
			payload: {}
		});
	}

	render() {
		const { props: { unidades } } = this;
		const { show, edit, create, remove, group } = this.state;
		const descriptionVehicles = unidades.filter(obj => obj.id === this.state.data).toJS()[0];

		let btnCreate = (
			<Button>
				Create
			</Button>
		);
		if(create){
			btnCreate = (
				<Link tag={Link}  to='/unidades'>
					<Button onClick={ this.cleanVehicleStore } color="info" className="mr-2">
						 Create
					</Button>
				</Link>
			);
		}

		let btnEdit = (
			<Button disabled className="mr-2">
				Edit
			</Button>
		);
		if (edit) {
			btnEdit = (
				<Link tag={Link}  to='/unidades'>
					<Button className="mr-2" color="success">
						 Edit
					</Button>
				</Link>
			);
		}

		let btnRemove = (
			<Button disabled className="mr-2">
				Delete
			</Button>
		);
		if (remove) {
			btnRemove = (
				<Link  tag={Link}  to="/vehicles">
					<Button onClick={ this.deleteVehicle } color="danger" className="mr-2" >
						Delete
					</Button>
				</Link>
			);
		}

		let btnGroup = (
			<Button className="mr-2">
				New Group
			</Button>
		);
		if (group) {
			btnGroup = (
				<Link tag={Link}  to='/flotilla'>
					<Button className="mr-2" color="info">
						 New Group
					</Button>
				</Link>
			);
		}

		return (
			<Container >
				{ btnCreate }
				{ btnEdit }
				{ btnRemove }
				{ btnGroup }
				<br/>
				<br/>
				<Griddle data={ unidades ? unidades.toJS() : [] }
				plugins={[plugins.LocalPlugin]}
				styleConfig={{
					classNames: {
						Table: 'table table-bordered',
					}
				}}
				components={{
					Layout: NewLayout
				}}>
					<RowDefinition>
						<ColumnDefinition id="label" title="Label" visible/>
				      	<ColumnDefinition id="model" title="Model" visible/>
				      	<ColumnDefinition id="tracker.label" title="Tracker" visible/>
				      	<ColumnDefinition id="vehicle_registration_plate" title="Registration Plate" visible/>
				      	<ColumnDefinition id="type.label" title="Type" visible/>
				      	<ColumnDefinition id="id" title="Description" visible customComponent={ CustomColumn(this.showDescription) }/>
				 	</RowDefinition>
				</Griddle>
				{ show && descriptionVehicles ? (
					<Vehicles
						label = { descriptionVehicles.label }
						model = { descriptionVehicles.model }
						tracker = { descriptionVehicles.tracker.label }
						vehicle_registration_plate = { descriptionVehicles.vehicle_registration_plate }
						type = { descriptionVehicles.type.label }
					/> ) : null
				}
			</Container>
		);
	}
}

export default connect(selector)(VehiclesListComponent);
