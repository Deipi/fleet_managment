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
		const w=value.map(obj=>obj.label)
		dispatch(change('formDriver', 'tags', w, true));
	}

	render() {
		const { info } = this.props;
		return (
			<FormConductor
				actionSubmit={ this.actionSubmit }
				onChangeAction={ this.onChangeAction }
				initialValues={ info }
			/>
		);
	}
}

export const Conductor = connect( (state) => { return {info: state.conductoresEdit} })(ConductorComponent);
export default connect((state) => {return {info: state.get('conductoresInfo')} })(ConductorComponent);