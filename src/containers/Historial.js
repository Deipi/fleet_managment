import React, { Component } from 'react';
import { connect } from 'react-redux';
import Griddle, { ColumnDefinition, RowDefinition, plugins } from 'griddle-react';
import { fetchDrivers } from '../actions/IndexDrivers';
import {Container} from 'reactstrap'

const NewLayout = ({ Table }) => (
	<div>
		<Table/>
	</div>
);

const selector = state => ({
	conductores: state.get('DriversList'),
})

class DriversList extends Component {
	componentWillMount() {
		const { props: { dispatch } } = this;
		dispatch(fetchDrivers());
	}

	render() {
		const { props: { conductores } } = this;

		return (
			<Container style={{zIndex:0}}>
				<center>
					<h3>DRIVER HISTORY</h3>
				</center><br/>
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
					  <ColumnDefinition id="driver_license_class" title="Driver License Class" visible/>
				      <ColumnDefinition id="department.label" title="Department" visible/>
				      <ColumnDefinition id="first_name" title="First Name" visible/>
				      <ColumnDefinition id="last_name" title="Last Name" visible/>
				      <ColumnDefinition id="middle_name" title="Middle Name" visible/>
				      <ColumnDefinition id="tracker.label" title="Tracker" visible/>
				      <ColumnDefinition id="hardware_key" title="Hardware Key" visible/>
				      <ColumnDefinition id="email" title="Email" visible/>
				      <ColumnDefinition id="phone" title="Phone" visible/>
				      <ColumnDefinition id="driver_license_number" title="Driver License Number" visible/>
				 	</RowDefinition>
				</Griddle>
			</Container>
		);
	}
}

export default connect(selector)(DriversList);