import React, { Component } from 'react';
import { connect } from 'react-redux';

export class FilterMap extends Component {
   render() {
		const { mapd, onClick }=this.props;
		  return (
			<div>
				<select className="selectpicker form-control" name='state' onChange={ mapd } >
					<option value="">All the departments</option>
					<option value="Desarrollo">Development</option>
					<option value="Diseño">Design</option>
					<option value="Ventas">Sales</option>
				</select>
			</div>
		);
	}
}

export default connect()(FilterMap)
