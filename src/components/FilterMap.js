import React, { Component } from 'react';
import { connect } from 'react-redux';


export class FilterMap extends Component {
   render() {
   	
		const { mapd, onClick }=this.props;
		  return (
		<div>

			<select name='state' onChange={ mapd } >
				<option value="">Todos los departamentos</option>
				<option value="Desarrollo">Desarrollo</option>
				<option value="Diseño">Diseño</option>
				<option value="Ventas">Ventas</option>
			</select>
				<button onClick={ onClick }>Filter</button>
		</div>

		);
	}
}

export default connect()(FilterMap)
