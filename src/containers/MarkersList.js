import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { fetchVehicles } from '../actions/index';

const products = [{
	id: 1,
	model: 'Lobo',
	vehicle_registration_plate: '123qwe',
	type: 'Special',
	tracker: 'Luis',
	status: 'Online'}
];

// const selector = state => {
// 	return {
// 		unidades: state.get('VehiclesList'),
// 	}
// };

class DataTable extends Component {



  render() {

  	const { props: { unidades, dispatch } } = this;
		dispatch(fetchVehicles());

    return (

      <BootstrapTable data={ unidades ? unidades.toJS() : [] } >
          <TableHeaderColumn dataField='id' isKey={ true }>Unit ID</TableHeaderColumn>
          <TableHeaderColumn dataField='model'>Model</TableHeaderColumn>
          <TableHeaderColumn dataField='vehicle_registration_plate'>Plate</TableHeaderColumn>
          <TableHeaderColumn dataField='type.label'>Type</TableHeaderColumn>
          <TableHeaderColumn dataField='tracker'>Tracker</TableHeaderColumn>
          <TableHeaderColumn dataField='status'>Status</TableHeaderColumn>
      </BootstrapTable>

    );
  }
}

export default connect() (DataTable);