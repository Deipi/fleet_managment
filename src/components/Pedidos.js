import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

import { Container, Card, Button, CardTitle, CardText, Row, Col, InputGroup, InputGroupAddon, Input } from 'reactstrap';

const PedidosDate=({input, meta:{touched, error}, ...rest})=>(
    <div>
        <DatePicker
        {...input}
        {...rest}
        selected={input.value ? moment(input.value) : null}
        dateFormat="YYYY-MM-DD"
        />
    </div>
);

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

const SimpleFormPedidos = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <Container>
        <Card block>
            <form onSubmit={handleSubmit}>
                <Row>

                    <Col className="offset-5">
                            <tr>MONITORING ORDERS</tr><br/>
                    </Col>

                    <Col className="col-sm-10 offset-4">

                       <InputGroup>
                       <InputGroupAddon>First Name</InputGroupAddon>

                                    <Field
                                        name="nombre"
                                        component="input"
                                        type="text"
                                        label="npm"

                                    />

                        </InputGroup>

                        <br/>

                        <InputGroup>
                        <InputGroupAddon>Last Name</InputGroupAddon>
                            <Field
                                name="apellido"
                                component="input"
                                type="text"
                                label="npm"
                            />
                        </InputGroup>
                        <br/>

                         <InputGroup>
                        <InputGroupAddon>Phone</InputGroupAddon>
                            <Field
                                name="telefono"
                                component="input"
                                type="telefono"
                                label="npm"
                            />
                        </InputGroup>

                        <br/>

                         <InputGroup>
                        <InputGroupAddon>Email</InputGroupAddon>
                                    <Field
                                        name="email"
                                        component="input"
                                        type="email"
                                        label="npm"
                                    />
                        </InputGroup>

                        <br/>

                        <InputGroup>
                        <InputGroupAddon>Address</InputGroupAddon>
                            <Field
                                name="direccion"
                                component="input"
                                type="direccion"
                                label="npm"
                            />
                        </InputGroup>
                        <br/>

                        <InputGroup>
                        <InputGroupAddon>Order</InputGroupAddon>
                            <Field
                                name="pedido"
                                component="input"
                                type="pedido"
                                label="npm"
                            />
                        </InputGroup>
                        <br/>

                         <InputGroup>
                         <InputGroupAddon>Date</InputGroupAddon>
                            <Field
                                name="fecha"
                                component={ PedidosDate }

                            />
                        </InputGroup>
                        <br/>

                    </Col>

                    <Col className="offset-5">
                        <Button type="submit" color="primary" disabled={pristine || submitting}>Save</Button>
                        <Button type="Button" color="primary" disabled={pristine || submitting} onClick={reset}>Clear</Button>
                    </Col>

                </Row>
            </form>
        </Card>
    </Container>
  )
}

export default reduxForm({
  form: 'simplePedidos'  // a unique identifier for this form
})(SimpleFormPedidos)