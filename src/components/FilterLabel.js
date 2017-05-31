import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class FilterLabel extends Component {
	render() {

	return (

		<FormGroup>
			<Input type="text" name="label"  placeholder="Label..." onChange={ this.props.onTextUpdate } />
		</FormGroup>
		);
	}
}

export default FilterLabel;
 