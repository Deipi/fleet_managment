import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import FilterModel from '../components/FilterModel';
import FilterLabel from '../components/FilterLabel';
import FilterTracker from '../components/FilterTracker';
import fetchVehiclesFilter from '../actions/Filters';

class FilterMapUnit extends Component {

	constructor(props) {
		super(props);
		this.updateTextFilterM = this.updateTextFilterM.bind(this);
		this.updateTextFilterL = this.updateTextFilterL.bind(this);
		this.updateTextFilterT = this.updateTextFilterT.bind(this);
		this.retrieveFilteredReceipts = this.retrieveFilteredReceipts.bind(this);

		this.state = {
			model: null,
			label: null,
			['tracker.label']: null,
		}
	}

	updateTextFilterM(input) {
		this.setState({ model: input.target.value })
	}
	updateTextFilterL(input) {

		this.setState({ label: input.target.value })
	}

	updateTextFilterT(input) {
		this.setState({ ['tracker.label']: input.target.value })
	}

	retrieveFilteredReceipts() {

		const { dispatch } = this.props;

		let queyObj = this.state;
		const queryArray = []
		for (var key in queyObj) {
			if (queyObj.hasOwnProperty(key)) {
				if (queyObj[key]) {
					queryArray.push(`${ key }=${queyObj[key]}`);
				}
			}
		}
		dispatch(fetchVehiclesFilter(queryArray.join('&')))
	}

	render() {
		return (
			<Col className="col-sm-11 ">
				<Row>
					<Col sm='3'>
						<FilterModel onTextUpdate={ this.updateTextFilterM } />
					</Col>
					<Col sm='3'>
						<FilterTracker onTextUpdate={ this.updateTextFilterT } />
					</Col>
					<Col sm='3'>
						<FilterLabel onTextUpdate={ this.updateTextFilterL } />
					</Col>
					<Col sm='1'>
						<Button color="info" onClick={ this.retrieveFilteredReceipts } >Filter</Button>
					</Col>
				</Row>
				</Col>
		);
	}
}

export default connect()(FilterMapUnit);