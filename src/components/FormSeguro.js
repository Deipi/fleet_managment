import React from 'react'
import { Field } from 'redux-form/immutable'
import 'react-select/dist/react-select.css'

import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'

class InsuranceDate extends React.Component {
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

const FormSeguro=(props)=>{
	const { handleSubmit } = props
	return(
		<div>
		<br/>
			<div>
			<center>
			<tr>INSURANCE</tr><br/>
			</center>
			</div>

			<div>
			<label>Insurance policy number</label>
			<div>
				<Field name="insurance_policy_number" component="input"  type="text"/>
			</div>

			<label>Insurance valid</label>
			<div>
				<Field name="insurance_valid" component={InsuranceDate}/>
			</div>

			<label>Insurance 2 policy number</label>
			<div>
				<Field name="insurance_2_policy_number" component="input" type="text"/>
			</div>

			<label>Insurance 2 valid</label>
			<div>
				<Field name="insurance_2_valid" component={InsuranceDate}/>
			</div>
			</div>
		</div>
	)
}
export default FormSeguro;