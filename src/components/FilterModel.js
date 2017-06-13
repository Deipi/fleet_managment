import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';

import { Container, Card, CardTitle, CardText, Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';

const renderField = ({ onChangeAction, index, input, label, type, meta: { touched, error } }) => {
	const styleError = {};
	let errorSpan = null;

	const ERROR_STYLE = {
		position: 'absolute',
		zIndex: '3',
		right: '11px',
		top: '-9px',
	};

	if (touched && error) {
		errorSpan = <span className="badge badge-danger" style={ ERROR_STYLE }>{ error }</span>;
		styleError.borderColor = 'darkred';
	}
	return(
		<div style={ { position: 'relative' } }>
		{ errorSpan }
		<InputGroup>
		<InputGroupAddon> {label}</InputGroupAddon>
		<Input { ...input } style={ styleError }  name={ input.name } id="inputs" type={type} placeholder={label} />
		</InputGroup>
		</div>
	);
};

export class FilterModel extends Component {
	render() {
		const { fil }=this.props;
		return (
			
				
					<InputGroup>
					<InputGroupAddon>Model</InputGroupAddon>
						<Input
							type="text"
							name="model"
							onChange={ this.props.onTextUpdate }
						/>
					</InputGroup>
				
			
		);
	}
}

export default FilterModel;
