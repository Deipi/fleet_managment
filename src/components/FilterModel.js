import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class FilterModel extends Component {
	render() {
		const { fil }=this.props;
	return (

		<FormGroup>
			<Input type="text" name="model"  placeholder="Model..." onChange={ this.props.onTextUpdate } />
		</FormGroup>
		);
	}
}

export default FilterModel;
 