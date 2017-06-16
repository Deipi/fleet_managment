import React from 'react'
import {Field, reduxForm} from 'redux-form/immutable';
import Alertas from '../containers/Alertas';

const SimpleFormAlertas = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <div>
            <h3>Hola</h3>
            <Alertas/>
        </div>
    )
}

export default reduxForm({
    form: 'alert'
})(SimpleFormAlertas)