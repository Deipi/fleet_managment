import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import validate from '../validate'
import { Link } from 'react-router-dom';
import SAVE from '../actions/indexRegistrar'

const renderField = ({ input,label,type,meta: { asyncValidating, touched, error }}) => (
    <div>
        <label>{label}</label>
        <div className={asyncValidating ? 'async-validating' : ''}>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)

const SimpleFormRegistrar = (props) => {
  const { handleSubmit, pristine, reset, submitting, actionSubmit } = props
  return (
    <form onSubmit={handleSubmit(actionSubmit)}>
        <div>
            <center>
                <h3>REGISTRAR</h3><br/>
            </center>
        </div>

        <div>
            <center>
                <label>Nombre</label>
                <div>
                    <Field name="name" component={renderField} type="text" placeholder="Nombre"/>
                </div>
            </center>
        </div><br/>

        <div>
            <center>
                <label>Apellido</label>
                <div>
                    <Field name="apellido" component={renderField} type="text" placeholder="Apellido"/>
                </div>
            </center>
        </div><br/>

        <div>
            <center>
                <label>Telefono</label>
                <div>
                    <Field name="telefono" component={renderField} type="telefono" placeholder="Telefono"/>
                </div>
            </center>
        </div><br/>

        <div>
            <center>
                <label>Email</label>
                <div>
                    <Field name="email" component={renderField} type="email" placeholder="Email"/>
                </div>
            </center>
        </div><br/>

        <div>
            <center>
                <label>Password</label>
                <div>
                    <Field name="password" component={renderField} type="password" placeholder="Password"/>
                </div>
            </center>
        </div><br/>

        <div>
            <center>
            <button type="submit" onClick={()=>alert('Registrado')} disabled={pristine || submitting}>Enviar</button>
            </center><br/>
        </div>
    </form>
  )
}

export default reduxForm({
  form: 'simpleRegistrar',  // a unique identifier for this form
  validate
})(SimpleFormRegistrar)