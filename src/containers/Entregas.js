import React, { Component } from 'react';
import { connect } from 'react-redux';
import Griddle, { ColumnDefinition, RowDefinition, plugins } from 'griddle-react';
import { fetchEntregas, FETCHED_ENTREGAS } from '../actions/indexPedidos';

const NewLayout = ({ Table }) => (
	<div>
		<Table/>
	</div>
);

const selector = state => ({
	entregas: state.get('Entregas'),
})

class EntregasList extends Component {
	componentWillMount() {
		const { props: { dispatch } } = this;
		dispatch(fetchEntregas());
	}

	render(){
		const { props: { entregas } } = this;

		return(
			<div>
				<center>
					<h3>DELIVERIES</h3>
				</center>

				<Griddle data={ entregas ? entregas.toJS() : [] }
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
					  <ColumnDefinition id="id" title="ID" visible order={1}/>
					  <ColumnDefinition id="nombre" title="First Name" visible order={2}/>
				      <ColumnDefinition id="apellido" title="Last Name" visible order={3}/>
				      <ColumnDefinition id="telefono" title="Phone" visible order={4}/>
				      <ColumnDefinition id="email" title="E-mail" visible order={5}/>
				      <ColumnDefinition id="direccion" title="Address" visible order={6}/>
				      <ColumnDefinition id="pedido" title="Description" visible order={7}/>
				      <ColumnDefinition id="fecha" title="Departure Date" visible order={8}/>
				      <ColumnDefinition id="fechaL" title="Arrival Date" visible order={9}/>
				 	</RowDefinition>
				</Griddle>
			</div>
		);
	}
}

export default connect(selector)(EntregasList);