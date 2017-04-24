import React from 'react'
import { Field, reduxForm } from 'redux-form/immutable'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
  }
}

const FormLicenciaConductor=(props)=>{
	const { handleSubmit }=props
	return(
		<div>
		<br/>
			<div>
				<center>
					<tr>DRIVER LICENSE</tr>
				</center>
			</div>

				<div>
					<label>Driver license number</label>
					<div>
						<Field name="driver_license_number" component="input" type="number"/>
					</div>

					<label>Driver license class</label>
					<div>
						<Field name="driver_license_class" component="input" type="text"/>
					</div>

					<label>Expiration date</label>
					<div>
						<Field name="expiration_date" component={Example} />
					</div>
				</div>
		</div>
	)
}
export default FormLicenciaConductor;