import React, { Component } from 'react';
import { connect } from 'react-redux';

export class FilterMapFlotilla extends Component {
	render() {
		const { mapf }=this.props;
			return (
				<div>
					<select name='fleet' onChange={ mapf }>
						<option value="">Flotillas</option>
						<option value="Andres">Andres</option>
						<option value="Sergio">Sergio</option>
						<option value="Manuel">Manuel</option>
					</select>
						
				</div>
			);
	}
}
export default connect()(FilterMapFlotilla)