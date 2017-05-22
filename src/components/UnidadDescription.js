import React from 'react';

export const UnidadDescription = props => (
	<div><br/><br/>
		<div> <center><label>DESCRIPTION</label></center> </div>
		<div> <center>{ props.model }</center> </div>
		<div> <center>{ props.vehicle_registration_plate }</center> </div>
		<div> <center>{ props.type }</center> </div>
		<div> <center>{ props.tracker }</center> </div>
		<div> <center>{ props.status }</center> </div>
	</div>
);

export default UnidadDescription;