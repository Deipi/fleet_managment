import React, { Component } from 'react';
import { connect } from 'react-redux';
import Griddle, { ColumnDefinition, RowDefinition, plugins } from 'griddle-react';
import { fetchVehicles, FETCHED_EDITED, deleteVehicles } from '../actions/index';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Vehicles } from '../components/Vehicles';
import createVehicle from '../actions/index';

const NewLayout = ({ Table,Filter,Pagination }) => (
	<div>
		<Filter/>
		<Table/>
		<Pagination/>
	</div>
);

const CustomColumn = showDescription => ({value}) =>
	<button type="button" className="btn btn-default" onClick={ () => showDescription(value) }>
		<span className="glyphicon glyphicon-align-justify"></span>
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
				<Button>
					<Link className="btn" tag={Link} color="info" to='/formulario'> create </Link>
				</Button>
			);
		}

		let btnEdit = (
			<Button disabled>
				Edit
			</Button>
		);

		if (edit) {
			btnEdit = (
				<Button>
					<Link className="btn" tag={Link} color="info" to='/formulario'> edit </Link>
				</Button>
			);
		}

		let btnRemove = (
			<Button disabled >
				Remove
			</Button>
		);

		if (remove) {
			btnRemove = (
				<Button onClick={ this.deleteVehicle } >
					<Link className="btn" tag={Link} color="info" to="/vehicles">remove</Link>
				</Button>
			);
		}

		let btnGroup = (
			<Button>
				Group
			</Button>
		);

		if (group) {
			btnGroup = (
				<Button>
					<Link className="btn" tag={Link} color="info" to=''> new_group </Link>
				</Button>
			);
		}

		return (
			<div>
				{ btnCreate }
				{ btnEdit }
				{ btnRemove }
				{ btnGroup }
				<Griddle data={ unidades ? unidades.toJS() : [] }
				plugins={[plugins.LocalPlugin]}
				styleConfig={{
					classNames: {
						Table: 'table table-striped',
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
			</div>
		);
	}
}

export default connect(selector)(VehiclesListComponent);