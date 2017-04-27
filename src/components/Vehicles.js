import React from 'react';

export const Vehicles = props => (
	<div><br/><br/>
		<div> <center><label>DESCRIPTION</label></center> </div>
		<div> <center>{ props.label }</center> </div>
		<div> <center>{ props.model }</center> </div>
		<div> <center>{ props.tracker }</center> </div>
		<div> <center>{ props.reg_plate }</center> </div>
		<div> <center>{ props.type }</center> </div>
	</div>
);

export default Vehicles;
