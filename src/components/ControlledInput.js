
import React from 'react';

export default class ControlledInput extends React.Component{
  constructor(props) {
    super(props)
   this.state = {
    firstName: "James",
    lastName:"Bond"
  }
}

  render() {


    const handleSubmit = (event) => {
      event.preventDefault();
    }

    const handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
    }


    return (
      <from onSubmit={ (event) => { handleSubmit } }>
        <label>Given Name</label>
        <input onChange={event=> handleChange(event)} name="firstName" value={this.state.firstName} type="text" />

        <br />

        <label>Last Name</label>
        <input type="text" onChange={event => handleChange(event)}  name="lastName" value={this.state.lastName} />
      </from>
    )
  }

}