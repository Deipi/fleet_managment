import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class FilterTracker extends Component {
	render() {

	return (

		<FormGroup>
			<Input type="text" name="tracker"  placeholder="Tracker..." onChange={ this.props.onTextUpdate } />
		</FormGroup>
		);
	}
}

export default FilterTracker;
 