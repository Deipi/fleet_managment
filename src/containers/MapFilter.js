import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { fetchEmpleados } from '../actions/FilterMap'
const NewLayout = ({ Table, Filter, Pagination }) => (
	<div>
		<Filter/>
		<Table/>
		<Pagination/>
	</div>
);

const selector = state => {
	return {
		unidades: state.get('MapFilter'),
	}
};

class FilterMapComponent extends Component {
	constructor(props){
		super(props);
			this.state = {
				department: true,
				fleet: true,
				status: true,
				units: true,
			};
		}
		componentWillMount() {
			const { props: { dispatch } } = this;
			dispatch(fetchEmpleados());
		}

		render() {
			const { props: { unidades } } = this;
			const { department, fleet, status, units } = this.state;

			let btnDepartment = (
				<Button>
					Department
				</Button>
			);

			let btnFleet = (
				<Button>
					Fleet
				</Button>
			);

			let btnStatus = (
				<Button>
					Status
				</Button>
			);

			let btnUnits = (
				<Button>
					Units
				</Button>
			);

		}

}

export default connect(selector)(FilterMapComponent);