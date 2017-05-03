import React from 'react'
import Flotilla from '../components/SimpleFormFlotilla';
import { connect } from 'react-redux';
import createFlotilla from '../actions/indexFlotilla';
import { fetchflotillas } from '../actions/indexFlotilla';

class FlotillaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.actionSubmit = this.actionSubmit.bind(this);
  }

  actionSubmit(values) {
    const { dispatch } = this.props;
    dispatch(createFlotilla(values.toJS()));
  }

  render() {
    return (
      <Flotilla
        actionSubmit={ this.actionSubmit }
        initialValues={ { nombre: 'Andrea', supervisor: 'Andres', garage: 'no garage' } }
      />
    );
  }
}

export default connect()(FlotillaComponent);