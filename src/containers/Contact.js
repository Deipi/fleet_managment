import React, { Component } from 'react';
import SimpleFormContac from '../components/FormContact';
import { connect } from 'react-redux';
import submitEmploye from '../actions/indexContact';

class SimpleFormContainer extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(values) {
		const { props: { dispatch } } = this;
		dispatch(submitEmploye(values))
	}

	render(){
		return (
			<SimpleFormContac onSubmit={ this.onSubmit } />
		);
	}
}

export default connect()(SimpleFormContainer);