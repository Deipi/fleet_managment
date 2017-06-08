import React, { Component } from 'react';
import { connect } from 'react-redux';
import Griddle, { ColumnDefinition, RowDefinition, plugins } from 'griddle-react';
import { fetchVehicles, FETCHED_EDITED, CLEAN_VEHICLE, deleteVehicles } from '../actions/index';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
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
				Nuevo
			</Button>
		);
		if(create){
			btnCreate = (
				<Button onClick={ this.cleanVehicleStore } >
					<Link tag={Link} color="info" to='/formulario'> Nuevo </Link>
				</Button>
			);
		}

		let btnEdit = (
			<Button disabled>
				Editar
			</Button>
		);
		if (edit) {
			btnEdit = (
				<Button>
					<Link tag={Link} color="info" to='/formulario'> Editar </Link>
				</Button>
			);
		}

		let btnRemove = (
			<Button disabled >
				Eliminar
			</Button>
		);
		if (remove) {
			btnRemove = (
				<Button onClick={ this.deleteVehicle } >
					<Link  tag={Link} color="info" to="/vehicles">Eliminar</Link>
				</Button>
			);
		}

		let btnGroup = (
			<Button>
				Nuevo Grupo
			</Button>
		);
		if (group) {
			btnGroup = (
				<Button>
					<Link tag={Link} color="info" to=''> Nuevo Grupo </Link>
				</Button>
			);
		}

		return (
			<div>
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
			</div>
		);
	}
}

export default connect(selector)(VehiclesListComponent);