import React, { Component } from 'react';
import Geocercas from '../components/Geocercas';
import { connect } from 'react-redux';
import submitGeocercas from '../actions/indexGeocercas';

class SimpleFormContainer extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(values) {
		const { props: { dispatch } } = this;
		dispatch(submitGeocercas(values))
	}

	render(){
		return (
			<Geocercas onSubmit={ this.onSubmit } />
		);
	}
}

export default connect()(SimpleFormContainer);