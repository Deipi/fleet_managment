import React from 'react'
import FormConductor from '../components/FormConductor';
import { connect } from 'react-redux';
import { change } from 'redux-form/immutable';

import createConductor from '../actions/indexConductores';

class ConductorComponent extends React.Component {
	constructor(props) {
		super(props);
		this.actionSubmit = this.actionSubmit.bind(this);
		this.onChangeAction = this.onChangeAction.bind(this);
	}

	actionSubmit(values) {
		const { dispatch } = this.props;
		dispatch(createConductor(values.toJS()));
	}

	onChangeAction(value) {
		const { dispatch } = this.props;
		dispatch(change('formDriver', 'tags', value, true));
	}

	render() {
		return (
			<FormConductor 
				actionSubmit={ this.actionSubmit }
				onChangeAction={ this.onChangeAction }
			/>
		);
	}
}

export const Conductor = connect()(ConductorComponent);
export default connect()(ConductorComponent);