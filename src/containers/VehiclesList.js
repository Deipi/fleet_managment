import React, { Component } from 'react';
import { connect } from 'react-redux';
import Griddle, { ColumnDefinition, RowDefinition, plugins } from 'griddle-react';
import { fetchVehicles } from '../actions';
import { Link } from 'react-router-dom';

const NewLayout = ({ Table,Filter,Pagination }) => (
	<div>
		<Filter/>
		<Link className="btn" tag={Link} color="info" to='/formulario'> Add Vehicle </Link>
		<Link className="btn" tag={Link} color="info" to='/flotilla'> New Group </Link>
		<Table/>
		<Pagination/>
	</div>
);

const selector = state => {
	return {
		vehicles: state.get('VehiclesList'),
	}
};

class VehiclesList extends Component {
	componentWillMount() {
		const { props: { dispatch } } = this;
		dispatch(fetchVehicles());
	}

	render() {
		const { props: { vehicles } } = this;
		return (
			<Griddle data={ vehicles ? vehicles.toJS() : [] } 
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
				  <ColumnDefinition id="label" visible/>
			      <ColumnDefinition id="model" visible/>
			      <ColumnDefinition id="tracker" visible/>
			      <ColumnDefinition id="reg_plate" visible/>
			      <ColumnDefinition id="type" visible/>
			 	</RowDefinition>
			</Griddle>
		);
	}
} 

export default connect(selector)(VehiclesList);