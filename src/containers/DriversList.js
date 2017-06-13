import React, { Component } from 'react';
import { connect } from 'react-redux';
import Griddle, { ColumnDefinition, RowDefinition, plugins } from 'griddle-react';
import { fetchDrivers, FETCHED_EDITED, CLEAN_DRIVER, deleteDrivers } from '../actions/IndexDrivers';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Driver } from '../components/Driver';
import createDriver from '../actions/IndexDrivers';
 
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
		conductores: state.get('DriversList'),
	}
};


class DriversListComponent extends Component {
	constructor(props) {
		super(props);
		this.showDescription = this.showDescription.bind(this);
		this.deleteDriver = this.deleteDriver.bind(this);
		this.cleanDriverStore = this.cleanDriverStore.bind(this);
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
		dispatch(fetchDrivers());
	}

	showDescription(value) {
		const { props: { conductores, dispatch } } = this;
		const descriptionDriver = conductores.filter(obj => obj.id === value).toJS()[0];
		dispatch({
			type: FETCHED_EDITED,
			payload: descriptionDriver,
		});
		this.setState({ show: true, data: value, edit: true, create: true, remove: true, group: true });
	}

	deleteDriver() {
		const { dispatch } = this.props;
		dispatch(deleteDrivers(this.state.data));
	}

	cleanDriverStore() {
		const { dispatch } = this.props;
		dispatch({
			type: CLEAN_DRIVER,
			payload: {}
		});
	}

	render() {
		const { props: { conductores } } = this;
		const { show, edit, create, remove, group } = this.state;
		const descriptionDrivers = conductores.filter(obj => obj.id === this.state.data).toJS()[0];

		let btnCreate = (
			<Button>
				Create
			</Button>
		);
		if(create){
			btnCreate = (
				<Button onClick={ this.cleanDriverStore } >
					<Link tag={Link} color="info" to='/conductores'> Create </Link>
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
					<Link tag={Link} color="info" to='/conductores'> Edit </Link>
				</Button>
			);
		}

		let btnRemove = (
			<Button disabled>
				Delete
			</Button>
		);
		if (remove) {
			btnRemove = (
				<Button onClick={ this.deleteDriver }>
					<Link tag={Link} color="info" to='/drivers'> Delete </Link>
				</Button>
			);
		}

		

		return (
			<div>
				{ btnCreate }
				{ btnEdit }
				{ btnRemove }
				
				<br/>
				<br/>
				<Griddle data={ conductores ? conductores.toJS() : [] }
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
					  	<ColumnDefinition id="last_name" title="Last Name" visible/>
					  	<ColumnDefinition id="first_name" title="First Name" visible/>
				      	<ColumnDefinition id="tracker.label" title="Tracker" visible/>
				      	<ColumnDefinition id="phone" title="Phone" visible/>
				      	<ColumnDefinition id="email" title="Email" visible/>
				      	<ColumnDefinition id="hardware_key" title="Hardware key" visible/>
				      	<ColumnDefinition id="driver_license_number" title="License" visible/>
				      	<ColumnDefinition id="id" title="Description" visible customComponent={ CustomColumn(this.showDescription) }/>
				 	</RowDefinition>
				</Griddle>
				{ show && descriptionDrivers ? (
					<Driver
						last_name = { descriptionDrivers.last_name }
						first_name = { descriptionDrivers.first_name }
						tracker = { descriptionDrivers.tracker.label }
						phone = { descriptionDrivers.phone }
						email = { descriptionDrivers.email }
						hardware_key = { descriptionDrivers.hardware_key }
						driver_license_number = { descriptionDrivers.driver_license_number }
					/> ) : null
				}
			</div>
		);
	}
}

export default connect(selector)(DriversListComponent);