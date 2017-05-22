import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class Filter extends Component {
	render() {

	return (

		<FormGroup>
			<Input type="text" name="model"  placeholder="Model..." onChange={ this.props.onTextUpdate } />
		</FormGroup>
		);
	}
}

export default Filter;
 