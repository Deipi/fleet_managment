import React, { Component } from 'react';
import Pedidos from '../components/Pedidos';
import { connect } from 'react-redux';
import submitPedidos from '../actions/indexPedidos';

class SimpleFormContainer extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(values) {
		const { props: { dispatch } } = this;
		dispatch(submitPedidos(values))
	}

	render(){
		return (
			<Pedidos onSubmit={ this.onSubmit } />
		);
	}
}

export default connect()(SimpleFormContainer);