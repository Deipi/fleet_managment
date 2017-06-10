import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Card, CardTitle, CardText, Row, Col, InputGroup, InputGroupAddon } from 'reactstrap';

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

export class FilterTracker extends Component {
	render() {

	return (
		<Container>
			<Row>
				<InputGroup>
				<InputGroupAddon>Tracker</InputGroupAddon>
					<Input
						type="text"
						name="tracker"
						onChange={ this.props.onTextUpdate } 
					/>
				</InputGroup>
			</Row>
		</Container>
		);
	}
}

export default FilterTracker;
 