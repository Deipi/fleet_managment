import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { fetchVehicles } from '../actions/index';

import Griddle, { ColumnDefinition, RowDefinition, plugins } from 'griddle-react';

const products = [
{
	id: 1,
	model: 'Lobo',
	vehicle_registration_plate: '123qwe',
	type: {
		"value": "special",
        "label": "Special"
	},
	tracker: {
		"value": "martin",
        "label": "Martin"
	},
	status:{
		"value": "off",
        "label": "Offline"
	},
}
];

const NewLayout = ({ Table }) => (
	<div>
		<Table/>
	</div>
);

const selector = state => {
	return {
		unidades: state.get('VehiclesList'),
	}
};

class DataTable extends Component {



  render() {

  	const { props: { unidades, dispatch } } = this;
		dispatch(fetchVehicles());

    return (

    	<div>
	    	 <Griddle data={ unidades ? unidades.toJS() : [] }
	       styleConfig={{
						classNames: {
							Table: 'table table-striped',
						}
			}}
			components={{
				Layout: NewLayout
			}}>
		   <RowDefinition>
		      <ColumnDefinition id="id" title="Unit ID" visible />
		      <ColumnDefinition id="model" title='Model' visible/>
		      <ColumnDefinition id="vehicle_registration_plate" title='Plate' visible />
		      <ColumnDefinition id="type.label" title='Type' visible />
		      <ColumnDefinition id="tracker.label" title='Tracker' visible />
		      <ColumnDefinition id="status.label" title='Status' visible/>
		    </RowDefinition>
		  </Griddle>
		 </div>
    );
  }
}

export default connect(selector) (DataTable);