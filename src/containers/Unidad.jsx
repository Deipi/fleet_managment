import React from 'react'
import FormUnidad from '../components/FormUnidad';
import { connect } from 'react-redux';
import { change } from 'redux-form/immutable';
import createUnidad, { updateVehicles } from '../actions/indexUnidad';

class UnidadComponent extends React.Component {
  constructor(props) {
    super(props);
    this.actionSubmit = this.actionSubmit.bind(this);
    this.onChangeAction = this.onChangeAction.bind(this);
  }

  actionSubmit(values) {

    const { dispatch } = this.props;

    const newValues = values.set('latitud', parseFloat(values.get('latitud'))).set('longitud', parseFloat(values.get('longitud')));
    dispatch(createUnidad(newValues.toJS()));

    const { dispatch, info } = this.props;
    if(info.get('id')){
      dispatch(updateVehicles(info.get('id'), values.toJS()));
    } else {
      dispatch(createUnidad(values.toJS()));
    }

  }

  onChangeAction(value){
    const { dispatch } = this.props;
    const w=value.map(obj=>obj.label)
    dispatch(change('formUnidad', 'tags', w, true));
  }

  render() {
    const { info } = this.props;
    return (
      <FormUnidad
        actionSubmit={ this.actionSubmit }
        onChangeAction={ this.onChangeAction }
        initialValues={ info }
      />
    );
  }
}

export const Unidad = connect((state) => {return {info: state.vehiclesEdit} })(UnidadComponent);
export default connect((state) => {return {info: state.get('vehiclesInfo')} })(UnidadComponent);