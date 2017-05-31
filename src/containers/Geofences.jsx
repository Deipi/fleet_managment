import React { Comment } from 'react'
import FormGeocercas from '../components/Geocercas';
import { connect } from 'react-redux';
import { change } from 'redux-form/immutable';

class GeofencesComponent extends Comment{
	constructor(props){
		super(props);

	}

	render(){
		return (
			<FormGeocercas

			>
		);
	}
}