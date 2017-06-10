import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import validate from '../validate'
import { Link } from 'react-router-dom';
import SAVE from '../actions/indexRegistrar'

import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { Container, Row, Col, Button, Card } from 'reactstrap'

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
                <Input { ...input } style={ styleError }  name={ input.name } id="inputs" type={type}  />
            </InputGroup>
        </div>
    );
};

const SimpleFormRegistrar = (props) => {
  const { handleSubmit, pristine, reset, submitting, actionSubmit } = props
  return (
    <Container>
        <Card block>
        <form onSubmit={handleSubmit(actionSubmit)}>
            <Row>
                <Col className="col-sm-12">
                    <center>
                        <br/><h3>REGISTER</h3><br/>
                    </center>

                    <InputGroup>
                        <Col className="col-sm-12">
                            <Field
                                name="name"
                                component={renderField}
                                type="text"
                                placeholder="Nombre"
                                label="Firts Name"
                            />
                        </Col>
                    </InputGroup><br/>

                    <InputGroup>
                        <Col className="col-sm-12">
                            <Field
                                name="apellido"
                                component={renderField}
                                type="text"
                                placeholder="Apellido"
                                label="Last Name"
                            />
                        </Col>
                    </InputGroup><br/>

                    <InputGroup>
                        <Col className="col-sm-12">
                            <Field
                                name="telefono"
                                component={renderField}
                                type="telefono"
                                placeholder="Telefono"
                                label="Phone"
                            />
                        </Col>
                    </InputGroup><br/>

                    <InputGroup>
                        <Col className="col-sm-12">
                            <Field
                                name="email"
                                component={renderField}
                                type="email"
                                placeholder="Email"
                                label="Email"
                            />
                        </Col>
                    </InputGroup><br/>

                    <InputGroup>
                        <Col className="col-sm-12">
                            <Field
                                name="password"
                                component={renderField}
                                type="password"
                                placeholder="Password"
                                label="Password"
                            />
                        </Col>
                    </InputGroup><br/>

                    <div>
                        <center>
                        <Button type="submit" color="primary" onClick={()=>alert('Registrado')} disabled={pristine || submitting}>Save</Button>
                        </center><br/>
                    </div>
                </Col>
            </Row>
        </form>
        </Card><br/>
    </Container>
  )
}

export default reduxForm({
  form: 'simpleRegistrar',  // a unique identifier for this form
  validate
})(SimpleFormRegistrar)