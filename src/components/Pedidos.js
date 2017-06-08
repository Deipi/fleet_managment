import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'

import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

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

const SimpleFormPedidos = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <center>
                <h3>MONITOREO PEDIDOS</h3><br/>
            </center>
        </div>

        <div>
            <center>
                <label>Nombre</label>
                <div>
                    <Field name="nombre" component="input" type="text" placeholder="Nombre"/>
                </div>
            </center>
        </div><br/>

        <div>
            <center>
                <label>Apellido</label>
                <div>
                    <Field name="apellido" component="input" type="text" placeholder="Apellido"/>
                </div>
            </center>
        </div><br/>

        <div>
            <center>
                <label>Telefono</label>
                <div>
                    <Field name="telefono" component="input" type="telefono" placeholder="Telefono"/>
                </div>
            </center>
        </div><br/>

        <div>
            <center>
                <label>Email</label>
                <div>
                    <Field name="email" component="input" type="email" placeholder="Email"/>
                </div>
            </center>
        </div><br/>

        <div>
            <center>
                <label>Direccion</label>
                <div>
                    <Field name="direccion" component="input" type="direccion" placeholder="Direccion"/>
                </div>
            </center>
        </div><br/>

        <div>
            <center>
                <label>Pedido</label>
                <div>
                    <Field name="pedido" component="input" type="pedido" placeholder="Pedido"/>
                </div>
            </center>
        </div><br/>

        <div>
            <center>
                <label>Fecha</label>
                <div>
                    <Field name="fecha" component={ PedidosDate }/>
                </div>
            </center>
        </div><br/>

        <div>
            <center>
            <button type="submit" disabled={pristine || submitting}>Enviar</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Reestablecer Valores</button>
            </center><br/>
        </div>
    </form>
  )
}

export default reduxForm({
  form: 'simplePedidos'  // a unique identifier for this form
})(SimpleFormPedidos)