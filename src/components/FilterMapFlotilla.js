import React, { Component } from 'react';
import { connect } from 'react-redux';

export class FilterMapFlotilla extends Component {
	render() {
		const { mapf }=this.props;
			return (
				<div>
					<select className="selectpicker form-control" name='state' onChange={ mapf }>
						<option value="">Fleets</option>
						<option value="Andres">Andres</option>
						<option value="Sergio">Sergio</option>
						<option value="Manuel">Manuel</option>
					</select>
				</div>
			);
	}
}
export default connect()(FilterMapFlotilla)