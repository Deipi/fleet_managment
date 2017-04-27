import React from 'react';

export const Driver = props => (
	<div><br/><br/>
		<div> <center><label>DESCRIPTION</label></center> </div>
		<div> <center>{ props.last_name }</center> </div>
		<div> <center>{ props.first_name }</center> </div>
		<div> <center>{ props.tracker }</center> </div>
		<div> <center>{ props.phone }</center> </div>
		<div> <center>{ props.email }</center> </div>
		<div> <center>{ props.hardware_key }</center> </div>
		<div> <center>{ props.driver_license_number }</center> </div>
	</div>
);

export default Driver;
