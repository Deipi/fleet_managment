import React, { Component } from 'react';
import { connect } from 'react-redux';
import Griddle, { ColumnDefinition, RowDefinition, plugins } from 'griddle-react';

import { fetchVehicles, FETCHED_EDITED } from '../actions/index';
import { UnidadDescription } from '../components/UnidadDescription';
import { Driver } from '../components/Driver';

 const NewLayoutM = ({ Table, Filter, Pagination }) => (
 		<div>
 			<Filter/>
 			<Table/>
 			<Pagination/>
 		</div>
 );

 const CustomColumn = showDescription => ({ value }) =>
	 	<button type="button" className="btn btn-default" onClick={ () => showDescription(value) }>
	 		<span className="glyphicon glyphicon-align-justify"></span>
	 	</button>;

 const selector = state => {
 	
 		return {
 
 			unidades: state.get('DriversList'),
 		}
 };

 class MarkersListComponent extends Component {
 		constructor(props) {
 			super(props);
 			this.showDescription = this.showDescription.bind(this);
 			this.state = {
 				show: false,
 				data: 0,
 				edit: false,
 			};
 		}

 		componentWillMount() {
 			const { props: { dispatch } } = this;
 			dispatch(fetchVehicles());
 		}

 		showDescription(value) {
 			const { props: { unidades, dispatch } } = this;
 			const descriptionVehicle = unidades.filter(obj => obj.id === value).toJS([0]);
 			dispatch({
 				type: FETCHED_EDITED,
 				payload: descriptionVehicle,
 			});
 			this.setState({ show: true, data: value, edit: true });
 		}

 		render() {
 			const { props: { unidades } } = this;
 			const { show, edit } = this.state;
 			const descriptionVehicles = unidades;

 			return (
 				<div>
 					<Griddle data={ unidades ? unidades.toJS() : [] }
 					plugins={[plugins.LocalPlugin]}
 					styleConfig={{
 						className: {
 							Table: 'table table-striped',
 						}
 					}}
 					components={{
 						Layout: NewLayoutM
 					}}>

 					<RowDefinition>
 						<ColumnDefinition id="model" title="Model" visble/>
 						<ColumnDefinition id="vehicle_registration_plate" title="Plate" visble/>
 						<ColumnDefinition id="type.label" title="Type" visble/>
 						<ColumnDefinition id="tracker.label" title="Tracker" visble/>
 						<ColumnDefinition id="status.label" title="Status" visble/>
 						<ColumnDefinition id="id" title="Descripcion" visble customComponent={ CustomColumn(this.showDescription) }/>
 					</RowDefinition>
 					</Griddle>
 					{ show && descriptionVehicles ? (
 						<UnidadDescription 
 							model = { descriptionVehicles.model }
 							vehicle_registration_plate = { descriptionVehicles.vehicle_registration_plate }
 							type = { descriptionVehicles.type }
 							tracker = { descriptionVehicles.tracker }
 							status = { descriptionVehicles.status }

 						/> ) : null
 					}
 				</div>

 			);
 		}
 }

 export default connect(selector)(MarkersListComponent);