import React, { Component } from 'react';
import { connect } from 'react-redux';
import Griddle, { ColumnDefinition, RowDefinition, plugins } from 'griddle-react';
import { fetchVehicles } from '../actions';
import { Link } from 'react-router-dom';

const NewLayout = ({ Table,Filter,Pagination }) => (
	<div>
		<Filter/>
		<Link className="btn" tag={Link} color="info" to='/hola'> Add Vehicle </Link>
		<Link className="btn" tag={Link} color="info" to='/vehicles'> New Group </Link>
		<Table/>
		<Pagination/>
	</div>
);

      		// <Link className="btn" tag={Link} to='/description'/>
const CustomColumn = showDescription => ({value}) => 
		<button type="button" className="btn btn-default" onClick={ () => showDescription(value) }>
      		<span className="glyphicon glyphicon-align-justify"></span>
    	</button>;


const selector = state => {
	return {
		vehicles: state.get('VehiclesList'),
	}
};

class VehiclesList extends Component {
	constructor(props) {
		super(props);

		this.showDescription = this.showDescription.bind(this);

		this.state = {
			show: false,
			data: 0,
		};
		
	}

	componentWillMount() {
		const { props: { dispatch } } = this;
		dispatch(fetchVehicles());
	}

	showDescription(value) {
		this.setState({ show: true, data: value });
	}

	render() {
		const { props: { vehicles } } = this;
		const { show } = this.state;


		const descriptionVehicle = vehicles.filter(obj => obj.id === this.state.data).toJS()[0]
		return (
			<div>
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
				      <ColumnDefinition id="id" title="Description" visible customComponent={ CustomColumn(this.showDescription) }/>
				 	</RowDefinition>
				</Griddle>
				{ show && descriptionVehicle ? (
					<div><br/><br/>
						<div> <center><label>DESCRIPTION</label></center> </div>
						<div> <center>{ descriptionVehicle.label }</center> </div>
						<div> <center>{ descriptionVehicle.model }</center> </div>
						<div> <center>{ descriptionVehicle.tracker }</center> </div>
						<div> <center>{ descriptionVehicle.reg_plate }</center> </div>
						<div> <center>{ descriptionVehicle.type }</center> </div>
					</div>
					) : null
				}
			</div>
		);
	}
} 

export default connect(selector)(VehiclesList);