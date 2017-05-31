import React, { Component } from 'react';
import { connect } from 'react-redux';

export class FilterMapState extends Component {
	render() {
		const { maps }=this.props;
			return (
				<div>
					<select name='status' onChange={ maps }>
						<option value="">Estados</option>
						<option value="Online">Online</option>
						<option value="Offline">Offline</option>
					</select>
				</div>
			);
	}
}

export default connect()(FilterMapState)