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
				
			/>
		);
	}
}

export const Conductor = connect()(ConductorComponent);
export default connect()(ConductorComponent);