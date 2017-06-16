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

const renderField = ({ onChangeAction, index, input, label,className, type, meta: { touched, error } }) => {
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
        <InputGroupAddon> <i className={className}/></InputGroupAddon>
        <Input { ...input }className="form-control" style={ styleError }  name={ input.name } id="inputs" type={type} placeholder={label} />
        </InputGroup>
        </div>
    );
};

const SimpleFormLogin = (props) => {
    const {handleSubmit, pristine, reset, submitting, actionSubmit} = props
    return (
    <Container>
        <Col className="col-sm-12">
            <form onSubmit={handleSubmit(actionSubmit)}>
                <Row>
                    <div className="col-sm-6">
                        <h3>Access your account</h3>
                        <br/>
                        <div>
                            <i className="fa fa-envelope fa-4x"/>
                                <p style={{ position:'absolute', margin:'-3.2em 5em'}}>Please enter your <strong>email</strong> and <strong>password</strong>  to enter the system.</p>
                        </div><br/><br/>
                        <div>
                            <i className="fa fa-check fa-4x"/>
                                <p style={{ position:'absolute', margin:'-3.2em 5em'}}>You can use the option of <strong>not logging out</strong> to avoid having to enter your password at each visit.</p>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <Card block>
                            <div className="offset-5">
                                    <br/>
                                    <h3>LOGIN</h3><br/>
                            </div>
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
                                        className="fa fa-fw fa-envelope"
                                    />
                                    <br/>
                                </Col>
                                </InputGroup>

                                <InputGroup>
                                <Col className="col-sm-10">
                                    <Field
                                        name="password"
                                        type="password"
                                        component={renderField}
                                        label="Password"
                                        className="fa fa-fw fa-key"
                                    /><br/><br/>
                                </Col>
                                </InputGroup>

                            </Col>
                                 <Row>
                                <div className="col-sm-12 offset-2">
                                <Button type="submit" disabled={ pristine || submitting }>
                                    Sign Up
                                </Button>
                                <Button className="btn btn-primary" type="button" onClick={reset}>
                                    <Link tag={Link} color="info" to='login'>Clear Values</Link>
                                </Button>
                                <Button className="btn btn-primary" type="button" onClick={reset}>
                                    <Link  tag={Link} color="info" to='registrar'>Register</Link>
                                </Button>
                                </div>
                                </Row>
                        </Card>
                    </div>
                </Row>
            </form>
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