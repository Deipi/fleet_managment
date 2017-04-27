import React from 'react'
import FormConductor from '../components/FormConductor';
import { connect } from 'react-redux';

import createConductor from '../actions/indexConductores';

class ConductorComponent extends React.Component {
	constructor(props) {
		super(props);
		this.actionSubmit = this.actionSubmit.bind(this);
	}

	actionSubmit(values) {
		const { dispatch } = this.props;
		dispatch(createConductor(values.toJS()));
	}

	render() {
		return (
			<FormConductor 
				actionSubmit={ this.actionSubmit }
				initialValues={
					{
						last_name: 'Cartens',
						first_name: 'Jose',
						middle_name: 'Luis',
						hardware_key: 'JMZMA18P200411817',
						phone: '7861161212',
						email:'alf@g.com',
						driver_license_number: '123',
						driver_license_class: 'abc',
						expiration_date: '2017-04-21'
					}
				}
			/>
		);
	}
}

export const Conductor = connect()(ConductorComponent);
export default connect()(ConductorComponent);