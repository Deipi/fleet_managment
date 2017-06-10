import React from 'react'
import {Field, reduxForm} from 'redux-form/immutable';
import { Link } from 'react-router-dom';
import { Container, Card, Button, CardTitle, CardText, Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';

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

const renderField = ({ onChangeAction, index, input, label, type, meta: { touched, error } }) => {
    const styleError = {};
    let errorSpan = null;

    const ERROR_STYLE = {
        position: 'absolute',
        zIndex: '3',
        right: '11px',
        top: '-9px',
    };

    if (touched && error) {
        errorSpan = <span className="badge badge-danger" style={ ERROR_STYLE }>{ error }</span>;
        styleError.borderColor = 'darkred';
    }
    return(
        <div style={ { position: 'relative' } }>
        { errorSpan }
        <InputGroup>
        <InputGroupAddon> {label}</InputGroupAddon>
        <Input { ...input } style={ styleError }  name={ input.name } id="inputs" type={type} placeholder={label} />
        </InputGroup>
        </div>
    );
};

const SimpleFormLogin = (props) => {
    const {handleSubmit, pristine, reset, submitting, actionSubmit} = props
    return (
    <Container>
        <Col className="col-sm-6 offset-3">
            <Card block>
                <form onSubmit={handleSubmit(actionSubmit)}>
                    <Row>
                        <Col className="offset-5">
                            <tr>LOGIN</tr><br/>
                        </Col>

                        <Col className="col-sm-12 offset-1">
                            <InputGroup>
                            <Col className="col-sm-10">
                                <Field
                                    name="email"
                                    type="email"
                                    component={renderField} 
                                    label="Email"
                                />
                            </Col>
                            </InputGroup>

                            <InputGroup>
                            <Col className="col-sm-10">
                                <Field
                                    name="password"
                                    type="password"
                                    component={renderField}
                                    label="Password"
                                />
                            </Col>
                            </InputGroup>

                        </Col>

                        <Col className="offset-2">
                            <Button type="submit" disabled={pristine || submitting}>
                                Sign Up
                            </Button>
                            <Button type="button" disabled={pristine || submitting} onClick={reset}>
                                <Link tag={Link} color="info" to='login'>Clear Values</Link>
                            </Button>
                            <Button type="button" disabled={pristine || submitting} onClick={reset}>
                                <Link  tag={Link} color="info" to='registrar'>Registrar</Link>
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Card>
        </Col>
    </Container>
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