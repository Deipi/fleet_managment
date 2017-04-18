const validate = values => {
  const errors = {}
  if (!values.get('cargo_capacity')) {
    errors.cargo_capacity = 'Required'
  }
  if (!values.get('cargo_l')) {
    errors.cargo_l = 'Required'
  }
  if (!values.get('cargo_w')) {
    errors.cargo_w = 'Required'
  }
  if (!values.get('cargo_h')) {
    errors.cargo_h = 'Required'
  }
  if (!values.get('number_of_passengers')) {
    errors.number_of_passengers = 'Required'
  }
  if(!values.get('label')){
    errors.label='Required'
  }

  if(!values.get('type')){
    errors.type='Required'
  }
  if (!values.get('nombre')) {
    errors.nombre = 'Required'
  }
  return errors
}

export default validate