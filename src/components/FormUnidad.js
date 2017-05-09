import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import Select from 'react-select';
import validate from '../validate'
import 'react-select/dist/react-select.css'
import SimpleFormD from './SimpleFormDimensiones';
import FormCombustible from './FormCombustible';
import FormWheelbase from './FormWheelbase';
import FormSeguro from './FormSeguro';


var CreatableTY = React.createClass({
  displayName: 'CreatableTY',
  propTypes: {
    hint: React.PropTypes.string,
    label: React.PropTypes.string
  },
  getInitialState () {
    return {
       options: [
          { value: 'car', label: 'Car'},
          { value: 'bus', label: 'Bus'},
          { value: 'special', label: 'Special'}
       ]
    };
  },
  render () {
    const { props: { input : { onChange, value, name } } } = this;
    const { options } = this.state;
    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label}</h3>
        <Select.Creatable
          options={options}
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
});

var CreatableTR = React.createClass({
  displayName: 'CreatableTR',
  propTypes: {
    hint: React.PropTypes.string,
    label: React.PropTypes.string
  },
  getInitialState () {
    return {
       optionsTR: [
      { value: 'no tracker', label: 'No Tracker'},
      { value: 'pepe', label: 'Pepe'},
      { value: 'luis', label: 'Luis'},
      { value: 'martin', label: 'Martin'}
     ]
    };
  },
  render () {
    const { props: { input : { onChange, value, name } } } = this;
    const { optionsTR } = this.state;
    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label}</h3>
        <Select.Creatable
          options={optionsTR}
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
});

var CreatableGA = React.createClass({
  displayName: 'CreatableGA',
  propTypes: {
    hint: React.PropTypes.string,
    label: React.PropTypes.string
  },
  getInitialState () {
    return {
      optionsGA: [
      { value: 'garage', label: 'Garage'},
      { value: 'no garage', label: 'No Garage'}
     ]
    };
  },
  render () {
    const { props : { input : { onChange, value, name } } } = this;
    const { optionsGA } = this.state;
    return (
      <div className="section">
        <h3 className="section-heading">{this.props.label}</h3>
        <Select.Creatable
          options={optionsGA}
          name={name}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
});

 var CreatableTAG=React.createClass({
  displayName: 'CreatableTAG',
  propTypes: {
    hint: React.PropTypes.string,
    label: React.PropTypes.string
  },
  getInitialState (){
    return {
      multi: true,
      multiValue: [],
      value: undefined
    };
  },
  handleOnChange (value){
    const { multi } = this.state;
    const { onChangeAction } = this.props;

    onChangeAction(value);
    if (multi) {
      this.setState({multiValue: value});
    }else{
      this.setState({value});
    }
  },
  render (){
    const { multi, multiValue, value } = this.state;
    return(
      <div className="section">
        <h3 className="section-heading">{this.props.label}</h3>
        <Select.Creatable
          multi={multi}
          onChange={this.handleOnChange}
          value={multi ? multiValue : value}
        />
      </div>
    );
  }
});

const format = value => {
  if(value && parseInt(value.split(' ')[0]) >0 && value.includes('Km/h')){
    return value.split(' ')[0] + value.split(' ')[2]+ ' Km/h ';
  }
  if(value){
    return value + ' Km/h ';
  }
}

 const renderField = ({ input, label, type, meta: { asyncValidating, touched, error } }) => (
  <div>
    <label>{label}</label>
    <div className={asyncValidating ? 'async-validating' : ''}>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)


const FormUnidadComponent = (props) => {
  const { onChangeAction, handleSubmit, pristine, reset, submitting, actionSubmit } = props

  return (

    <form onSubmit={ handleSubmit(actionSubmit) }>
    <div>
        <label>Label*</label>
        <div>
          <Field
            name="label"
            component={renderField}
            type="text"
          />
        </div>
      </div>

      <div>
        <label>Tracker</label>
        <div>
          <Field
            name="tracker"
            component={ CreatableTR }
          />
        </div>
      </div>

      <div>
        <label>Garage</label>
        <div>
          <Field
            name="garage"
            component={ CreatableGA }
          />
        </div>
      </div>

      <div>
        <label>Model</label>
        <div>
          <Field
            name="model"
            component="input"
            type="text"
            placeholder="Model"
          />
        </div>
      </div>

      <div>
        <label>Type*</label>
        <div>
          <Field
            name="type"
            component={ CreatableTY }
          />
        </div>
      </div>

      <div>
        <label>Vehicle registration plate</label>
        <div>
          <Field
            name="vehicle_registration_plate"
            component="input"
            type="text"
            placeholder="Vehicle"
          />
        </div>
      </div>

      <div>
        <label>VIN</label>
        <div>
          <Field
            name="vin"
            component="input"
            type="text"
            placeholder="VIN"
          />
        </div>
      </div>

      <div>
        <label>Chassis number</label>
        <div>
          <Field
            name="chassis_number"
            component="input"
            type="text"
            placeholder="Chassis number"
          />
        </div>
      </div>

      <div>
        <label>Permited speed</label>
        <div>
          <Field
            name="permited_speed"
            component={renderField}
            type="text"
            format={format}
          />
        </div>
      </div>

      <div>
        <label>Tags</label>
          <div>
            <Field
              name="tags"
              component={ CreatableTAG }
              onChangeAction={ onChangeAction }
            />
          </div>
      </div>

      <SimpleFormD/>
      <FormCombustible/>
      <FormWheelbase/>
      <FormSeguro/>

       <div>
        <button
          type="submit"
          disabled={pristine || submitting}>Guardar</button>
        <button
          type="button"
          disabled={pristine || submitting} onClick={reset}>Restab</button>
      </div>

  </form>

  )
}

export default reduxForm({
  form: 'formUnidad',
  validate,
})(FormUnidadComponent);

export const FormUnidad = reduxForm({
  form: 'formUnidad',
  validate,
})(FormUnidadComponent);