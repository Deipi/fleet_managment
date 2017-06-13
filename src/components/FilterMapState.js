import React, { Component } from 'react';
import { connect } from 'react-redux';

export class FilterMapState extends Component {
	render() {
		const { maps }=this.props;
			return (
				<div>
					<select className="selectpicker form-control" name='status' onChange={ maps }>
						<option value="">State</option>
						<option value="Online">Online</option>
						<option value="Offline">Offline</option>
					</select>
				</div>
			);
	}
}

export default connect()(FilterMapState)