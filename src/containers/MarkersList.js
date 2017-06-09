import React, { Component } from 'react';
import { connect } from 'react-redux';
import Griddle, { ColumnDefinition, RowDefinition, plugins } from 'griddle-react';

const NewLayout = ({ Table }) => (
	<div>
		<Table/>
	</div>
);

const selector = state => {
	return {
		item: state.get('currentVehicle'),
		vehicles: state.get('vehiclesStore'),
	}
};

class DataTable extends Component {

  render() {

  	const { props: { item, vehicles } } = this;

    return (
    	<div>
    		<Griddle data={ vehicles.filter(v => v.get('id') === item.get('id')).toJS() }
	       styleConfig={{
						classNames: {
							Table: 'table table-bordered',
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

export default connect(selector)(DataTable);
