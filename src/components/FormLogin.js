import React from 'react'
import {Field, reduxForm} from 'redux-form/immutable';
import { Link } from 'react-router-dom';

const validate = values => {
    const errors = {};

    if (!values.get('email')) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
        errors.email = 'Invalid email address'
    }

    if (!values.get('password')) {
        errors.password = 'Required'
    }

    return errors;
}

const renderField = ({ input,label,type,meta: { asyncValidating, touched, error }}) => (
    <div>
        <label>{label}</label>
        <div className={asyncValidating ? 'async-validating' : ''}>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const SimpleFormLogin = (props) => {
    const {handleSubmit, pristine, reset, submitting, actionSubmit} = props
    return (
    <form onSubmit={handleSubmit(actionSubmit)}>
        <div>
            <Field name="email" type="email" component={renderField} label="Email"/>
        </div>

        <div>
            <Field name="password" type="password" component={renderField} label="Password"/>
        </div>

        <div>
            <button type="submit" disabled={pristine || submitting}>
                Sign Up
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
                <Link className="btn" tag={Link} color="info" to='login'>Clear Values</Link>
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
                <Link className="btn" tag={Link} color="info" to='registrar'>Registrar</Link>
            </button>
        </div>
    </form>
  )
}

export default reduxForm({
    form: 'login', // a unique identifier for this form
    validate
})(SimpleFormLogin)

export const Login = reduxForm({
    form: 'login', // a unique identifier for this form
    validate
})(SimpleFormLogin)