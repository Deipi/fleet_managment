import React from 'react'
import FormUnidad from '../components/FormUnidad';
import { connect } from 'react-redux';
import { change } from 'redux-form/immutable';

import createUnidad from '../actions/indexUnidad';


// Container
class UnidadComponent extends React.Component {
  constructor(props) {
    super(props);

    this.actionSubmit = this.actionSubmit.bind(this);
    this.onChangeAction = this.onChangeAction.bind(this);
  }

  actionSubmit(values) {
    const { dispatch } = this.props;

    dispatch(createUnidad(values.toJS()));
  }

  onChangeAction(value){
    const { dispatch } = this.props;
    dispatch(change('formUnidad', 'tags', value, true));
  }

  render() {
    return (
      <FormUnidad
        onChangeAction={ this.onChangeAction }
        actionSubmit={ this.actionSubmit }
        initialValues={
          {
            label: 'Car',
            model: 'Ford Focus',
            vehicle_registration_plate: 'SBA 1234A',
            vin: 'JMZMA18P200411817',
            chassis_number: 'LJCPCBLCXI1000237'
          }
        }
      />
    );
  }
}

export const Unidad = connect()(UnidadComponent);
export default connect()(UnidadComponent);