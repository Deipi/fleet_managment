import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button,Breadcrumb, BreadcrumbItem } from 'reactstrap';
import Filter from '../components/Filter';
import FilterLabel from '../components/FilterLabel';
import FilterTracker from '../components/FilterTracker';
import fetchVehiclesFilter from '../actions/Filters';

class FilterMapUnit extends Component {

	constructor(props) {
		super(props);
		this.updateTextFilter = this.updateTextFilter.bind(this);
		this.updateTextFilterL = this.updateTextFilterL.bind(this);
		this.updateTextFilterT = this.updateTextFilterT.bind(this);
		this.retrieveFilteredReceipts = this.retrieveFilteredReceipts.bind(this);

		this.state = {
			model: null,
			label: null,
			['tracker.label']: null,
			// markers: [],
			// allMarkers: [],
		}
	}

	updateTextFilter(input) {
		// const { model: input.target.value }
		// const markersFilter = this.state.allMarkers;
		// this.setState({ markers: markersFilter})
		this.setState({ model: input.target.value })
		
	}
	updateTextFilterL(input) {

		
		this.setState({ label: input.target.value })
	}

	updateTextFilterT(input) {
		this.setState({ ['tracker.label']: input.target.value })
	}

	retrieveFilteredReceipts() {
		debugger;
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
			console.log(queyObj)

			console.log()
	}

	render() {

		return (
			<Row>
				<Col className="col-md-12 " >

						<Row>
							<Col sm='3'>
								<Filter onTextUpdate={ this.updateTextFilter } />

							</Col>
							<Col sm='3'>
								<FilterTracker onTextUpdate={ this.updateTextFilterT } />
							</Col>
							<Col sm='3'>
								<FilterLabel onTextUpdate={ this.updateTextFilterL } />
							</Col>
							<Col sm='3'>
								<Button color="info" onClick={ this.retrieveFilteredReceipts } >Filtrar</Button>
							</Col>
						</Row>
				</Col>
			</Row>
		);
	}
}

export default connect()(FilterMapUnit);