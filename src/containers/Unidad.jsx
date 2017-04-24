import React from 'react'
import FormUnidad from '../components/FormUnidad';
import { connect } from 'react-redux';

import createUnidad from '../actions/indexUnidad';


// Container
class UnidadComponent extends React.Component {
  constructor(props) {
    super(props);

    this.actionSubmit = this.actionSubmit.bind(this);
  }

  actionSubmit(values) {
    const { dispatch } = this.props;

    dispatch(createUnidad(values.toJS()));
  }

  render() {
    return (
      <FormUnidad
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