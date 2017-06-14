import React, { Component } from 'react';
import { connect } from 'react-redux';
import Griddle, { ColumnDefinition, RowDefinition, plugins } from 'griddle-react';
import { Button } from 'reactstrap';

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

const Monitor = monitorAction => ({ value }) => {
	return (
		<Button
			color="primary"
			onClick={ () => monitorAction(value) }
		>
			<span className="fa fa-eye" />
		</Button>
	);
};

class DataTable extends Component {

  render() {

  	const { props: { item, vehicles, monitorAction } } = this;

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
		      <ColumnDefinition id="model" title='Model' visible/>
		      <ColumnDefinition id="vehicle_registration_plate" title='Plate' visible />
		      <ColumnDefinition id="type.label" title='Type' visible />
		      <ColumnDefinition id="tracker.label" title='Tracker' visible />
		      <ColumnDefinition id="status.label" title='Status' visible/>
		      <ColumnDefinition id="id" title="Action" visible customComponent={ Monitor(monitorAction) } />
		    </RowDefinition>
		  </Griddle>

		 </div>
    );
  }
}

export default connect(selector)(DataTable);
